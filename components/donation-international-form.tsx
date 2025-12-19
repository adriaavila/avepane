"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CreditCard, Lock, Loader2 } from "lucide-react"

const PRESET_AMOUNTS = [10, 25, 50, 100]

interface DonationInternationalFormProps {
  onDonate: (amount: number, isRecurring: boolean) => Promise<void>
}

export function DonationInternationalForm({ onDonate }: DonationInternationalFormProps) {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [isRecurring, setIsRecurring] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  const getFinalAmount = (): number | null => {
    if (selectedAmount) return selectedAmount
    const custom = parseFloat(customAmount)
    if (!isNaN(custom) && custom > 0) return custom
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const amount = getFinalAmount()
    if (!amount || amount <= 0) return

    setIsLoading(true)
    try {
      await onDonate(amount, isRecurring)
    } catch (error) {
      console.error("Error processing donation:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const finalAmount = getFinalAmount()

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Amount Selector */}
      <div>
        <label className="text-base font-semibold mb-4 block">
          Selecciona el monto de tu donación
        </label>
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
          <input
            type="number"
            min="1"
            step="0.01"
            placeholder="Otro monto (USD)"
            value={customAmount}
            onChange={(e) => handleCustomAmountChange(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">USD</span>
        </div>
      </div>

      {/* Recurring Toggle */}
      <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary/30 border border-border">
        <input
          type="checkbox"
          id="recurring"
          checked={isRecurring}
          onChange={(e) => setIsRecurring(e.target.checked)}
          className="w-5 h-5 rounded border-border text-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
        />
        <label htmlFor="recurring" className="flex-1 cursor-pointer">
          <span className="font-semibold block">Donación mensual</span>
          <span className="text-sm text-muted-foreground">
            Con una donación mensual nos ayudas a planificar, sostener terapias y acompañar a más familias durante todo el año.
          </span>
        </label>
      </div>

      {/* Payment Methods */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" aria-hidden="true" />
          <span>Visa, Mastercard</span>
        </div>
        <span>•</span>
        <span>Apple Pay</span>
        <span>•</span>
        <span>Google Pay</span>
      </div>

      {/* Security Notice */}
      <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/20">
        <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
        <p className="text-sm text-muted-foreground">
          Pagos procesados de forma segura con Stripe
        </p>
      </div>

      {/* Legal Text */}
      <div className="p-4 rounded-lg bg-muted/50 border border-border">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Las donaciones internacionales son procesadas a través de Allok LLC, empresa aliada que apoya la recaudación de fondos para AVEPANE.
          El 100% del monto donado, descontando comisiones operativas de la plataforma de pago, es destinado a los programas de AVEPANE en Venezuela.
        </p>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        disabled={!finalAmount || finalAmount <= 0 || isLoading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
            Procesando...
          </>
        ) : (
          "Donar de forma segura"
        )}
      </Button>
    </form>
  )
}
