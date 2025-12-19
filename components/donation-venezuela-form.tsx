"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Loader2, Copy, Check } from "lucide-react"

const PRESET_AMOUNTS = [10, 25, 50, 100]

const venezuelaDonationSchema = z.object({
  fullName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  amount: z.number().min(1, "El monto debe ser mayor a 0"),
  bank: z.string().min(1, "Debes seleccionar un banco"),
  reference: z.string().min(1, "La referencia es obligatoria"),
  comment: z.string().optional(),
})

type VenezuelaDonationFormData = z.infer<typeof venezuelaDonationSchema>

const BANKS = [
  "Banco de Venezuela",
  "Banesco",
  "Mercantil",
  "Banco del Tesoro",
  "100% Banco",
  "Bancamiga",
  "Otro",
]

interface DonationVenezuelaFormProps {
  onDonate: (data: VenezuelaDonationFormData) => Promise<void>
}

export function DonationVenezuelaForm({ onDonate }: DonationVenezuelaFormProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<VenezuelaDonationFormData>({
    resolver: zodResolver(venezuelaDonationSchema),
  })

  const watchedAmount = watch("amount")

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
    setValue("amount", amount, { shouldValidate: true })
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
    const numValue = parseFloat(value)
    if (!isNaN(numValue) && numValue > 0) {
      setValue("amount", numValue, { shouldValidate: true })
    } else {
      setValue("amount", 0, { shouldValidate: true })
    }
  }

  const copyToClipboard = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldId)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const onSubmit = async (data: VenezuelaDonationFormData) => {
    await onDonate(data)
  }

  // Placeholder bank account data - should be replaced with real data
  const bankAccounts = [
    {
      bank: "Banco de Venezuela",
      accountType: "Corriente",
      accountNumber: "0102-0000-000000000000",
      id: "V-00000000-0",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Amount Selector */}
      <div>
        <Label className="text-base font-semibold mb-4 block">
          Selecciona el monto de tu donación
        </Label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {PRESET_AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => handleAmountSelect(amount)}
              className={`px-4 py-3 rounded-lg border-2 transition-all font-semibold ${
                selectedAmount === amount
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50 bg-background"
              }`}
            >
              ${amount}
            </button>
          ))}
        </div>
        <div className="relative">
          <Input
            type="number"
            min="1"
            step="0.01"
            placeholder="Otro monto (USD referencial)"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            className="pr-16"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">USD</span>
        </div>
        {errors.amount && (
          <p className="mt-1 text-sm text-destructive">{errors.amount.message}</p>
        )}
      </div>

      {/* Bank Account Information */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-6 space-y-4">
          <h3 className="font-heading text-lg font-semibold">Datos bancarios</h3>
          {bankAccounts.map((account, index) => (
            <div key={index} className="space-y-2 p-4 rounded-lg bg-background border border-border">
              <div className="flex items-center justify-between">
                <span className="font-semibold">{account.bank}</span>
                <span className="text-sm text-muted-foreground">{account.accountType}</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Número de cuenta:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                      {account.accountNumber}
                    </code>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(account.accountNumber, `account-${index}`)}
                      className="p-1 hover:bg-muted rounded transition-colors"
                      aria-label="Copiar número de cuenta"
                    >
                      {copiedField === `account-${index}` ? (
                        <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                      ) : (
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Cédula/RIF:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-sm font-mono bg-muted px-2 py-1 rounded">
                      {account.id}
                    </code>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(account.id, `id-${index}`)}
                      className="p-1 hover:bg-muted rounded transition-colors"
                      aria-label="Copiar cédula/RIF"
                    >
                      {copiedField === `id-${index}` ? (
                        <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                      ) : (
                        <Copy className="h-4 w-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <p className="text-sm text-muted-foreground leading-relaxed">
            Realiza tu transferencia o pago móvil a la cuenta indicada. Una vez completado, completa el formulario a continuación para registrar tu donación.
          </p>
        </CardContent>
      </Card>

      {/* Donation Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="fullName">
            Nombre y apellido <span className="text-destructive">*</span>
          </Label>
          <Input
            id="fullName"
            {...register("fullName")}
            placeholder="Juan Pérez"
            className="mt-1"
            aria-invalid={errors.fullName ? "true" : "false"}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-destructive">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            placeholder="juan@ejemplo.com"
            className="mt-1"
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="bank">
            Banco emisor <span className="text-destructive">*</span>
          </Label>
          <select
            id="bank"
            {...register("bank")}
            className="mt-1 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            aria-invalid={errors.bank ? "true" : "false"}
          >
            <option value="">Selecciona un banco</option>
            {BANKS.map((bank) => (
              <option key={bank} value={bank}>
                {bank}
              </option>
            ))}
          </select>
          {errors.bank && (
            <p className="mt-1 text-sm text-destructive">{errors.bank.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="reference">
            Referencia de pago <span className="text-destructive">*</span>
          </Label>
          <Input
            id="reference"
            {...register("reference")}
            placeholder="Número de referencia de tu transferencia"
            className="mt-1"
            aria-invalid={errors.reference ? "true" : "false"}
          />
          {errors.reference && (
            <p className="mt-1 text-sm text-destructive">{errors.reference.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="comment">Comentario (opcional)</Label>
          <Textarea
            id="comment"
            {...register("comment")}
            placeholder="Mensaje o comentario sobre tu donación"
            className="mt-1"
            rows={3}
          />
        </div>

        {/* Legal Text */}
        <div className="p-4 rounded-lg bg-muted/50 border border-border">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Las donaciones realizadas desde Venezuela se gestionan directamente a través de las cuentas bancarias de AVEPANE y son registradas para fines de control y transparencia institucional.
          </p>
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting || !watchedAmount || watchedAmount <= 0}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
              Enviando...
            </>
          ) : (
            "Confirmar donación"
          )}
        </Button>
      </form>
    </div>
  )
}
