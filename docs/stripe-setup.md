# Configuración de Stripe para Donaciones

Esta guía te ayudará a configurar Stripe para procesar donaciones internacionales en AVEPANE.

## Requisitos Previos

1. Cuenta de Stripe (crea una en [stripe.com](https://stripe.com))
2. Acceso a las claves de API de Stripe

## Instalación

1. Instala el SDK de Stripe:
```bash
npm install stripe
# o
pnpm add stripe
```

## Configuración de Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```env
# Stripe Secret Key (obténla de https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_...  # Para desarrollo usa sk_test_, para producción sk_live_

# Stripe Webhook Secret (obténla después de configurar el webhook)
STRIPE_WEBHOOK_SECRET=whsec_...

# URL base de tu aplicación
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # En producción será automático en Vercel
```

## Configuración en Stripe Dashboard

### 1. Obtener Claves de API

1. Ve a [Stripe Dashboard > Developers > API keys](https://dashboard.stripe.com/apikeys)
2. Copia la **Secret key** (empieza con `sk_test_` en modo test o `sk_live_` en producción)
3. Agrégala a tu `.env.local` como `STRIPE_SECRET_KEY`

### 2. Configurar Webhook (Opcional pero Recomendado)

Los webhooks permiten recibir notificaciones cuando se completan pagos.

1. Ve a [Stripe Dashboard > Developers > Webhooks](https://dashboard.stripe.com/webhooks)
2. Click en "Add endpoint"
3. URL del endpoint: `https://tu-dominio.com/api/stripe/webhook`
4. Selecciona los eventos a escuchar:
   - `checkout.session.completed`
   - `invoice.paid`
   - `customer.subscription.created`
   - `customer.subscription.deleted`
5. Copia el **Signing secret** (empieza con `whsec_`)
6. Agrégala a tu `.env.local` como `STRIPE_WEBHOOK_SECRET`

### 3. Modo Test vs Producción

- **Modo Test**: Usa claves que empiezan con `sk_test_` y `pk_test_`
  - Los pagos son simulados
  - Usa tarjetas de prueba: `4242 4242 4242 4242`
- **Modo Producción**: Usa claves que empiezan con `sk_live_` y `pk_live_`
  - Los pagos son reales
  - Requiere verificación de cuenta

## Flujo de Donaciones

### Donación Única

1. Usuario selecciona monto y hace click en "Donar de forma segura"
2. Se crea una sesión de Stripe Checkout
3. Usuario es redirigido a Stripe para completar el pago
4. Después del pago, Stripe redirige de vuelta a `/donar?success=true`
5. El webhook procesa el evento `checkout.session.completed`

### Donación Recurrente (Mensual)

1. Usuario selecciona monto, activa "Donación mensual" y hace click en "Donar"
2. Se crea una sesión de Stripe Checkout en modo `subscription`
3. Usuario es redirigido a Stripe para completar el pago
4. Después del pago, se crea una suscripción
5. Cada mes, Stripe procesa el pago automáticamente
6. El webhook recibe `invoice.paid` cada mes

## Próximos Pasos

1. **Conectar Base de Datos**: Actualiza los endpoints para guardar donaciones en tu base de datos
2. **Enviar Emails**: Integra un servicio de email (Resend, SendGrid, etc.) para confirmaciones
3. **Integrar n8n**: Configura el webhook de n8n para agregar donaciones a Google Sheets
4. **Monitoreo**: Configura alertas en Stripe para pagos fallidos o cancelaciones

## Tarjetas de Prueba

Para probar en modo test, usa estas tarjetas:

- **Éxito**: `4242 4242 4242 4242`
- **Rechazada**: `4000 0000 0000 0002`
- **3D Secure**: `4000 0025 0000 3155`

Fecha de expiración: cualquier fecha futura
CVC: cualquier 3 dígitos
Código postal: cualquier código válido

## Soporte

- [Documentación de Stripe](https://stripe.com/docs)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)
- [Stripe Subscriptions](https://stripe.com/docs/billing/subscriptions/overview)
