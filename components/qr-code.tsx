"use client"

import { useEffect, useRef } from "react"

interface QRCodeProps {
  url: string
  size?: number
}

export default function QRCode({ url, size = 128 }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const generateQRCode = async () => {
      if (!canvasRef.current) return

      try {
        // This is a simple implementation to draw a fake QR code
        // In a real app, you would use a library like qrcode.js
        const ctx = canvasRef.current.getContext("2d")
        if (!ctx) return

        // Clear canvas
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(0, 0, size, size)

        // Draw QR code pattern (simplified)
        ctx.fillStyle = "#000000"

        // Draw position markers (corners)
        // Top-left
        ctx.fillRect(0, 0, size * 0.25, size * 0.25)
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(size * 0.05, size * 0.05, size * 0.15, size * 0.15)
        ctx.fillStyle = "#000000"
        ctx.fillRect(size * 0.075, size * 0.075, size * 0.1, size * 0.1)

        // Top-right
        ctx.fillStyle = "#000000"
        ctx.fillRect(size * 0.75, 0, size * 0.25, size * 0.25)
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(size * 0.8, size * 0.05, size * 0.15, size * 0.15)
        ctx.fillStyle = "#000000"
        ctx.fillRect(size * 0.825, size * 0.075, size * 0.1, size * 0.1)

        // Bottom-left
        ctx.fillStyle = "#000000"
        ctx.fillRect(0, size * 0.75, size * 0.25, size * 0.25)
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(size * 0.05, size * 0.8, size * 0.15, size * 0.15)
        ctx.fillStyle = "#000000"
        ctx.fillRect(size * 0.075, size * 0.825, size * 0.1, size * 0.1)

        // Draw random dots to simulate QR code data
        ctx.fillStyle = "#000000"
        const blockSize = size * 0.05

        // Create a more structured pattern for the QR code
        for (let i = 0; i < 15; i++) {
          for (let j = 0; j < 15; j++) {
            // Skip the corner markers
            if ((i < 5 && j < 5) || (i < 5 && j > 9) || (i > 9 && j < 5)) {
              continue
            }

            // Create a more structured pattern based on URL
            const shouldFill = (i * j + url.length + i + j) % 3 === 0
            if (shouldFill) {
              ctx.fillRect(i * blockSize + size * 0.125, j * blockSize + size * 0.125, blockSize, blockSize)
            }
          }
        }

        // Add a small logo in the center
        ctx.fillStyle = "#ffffff"
        ctx.fillRect(size * 0.4, size * 0.4, size * 0.2, size * 0.2)

        // Draw a simple icon in the center
        ctx.fillStyle = "#000000"
        if (url.includes("github")) {
          // GitHub-like icon
          ctx.beginPath()
          ctx.arc(size * 0.5, size * 0.47, size * 0.06, 0, Math.PI * 2)
          ctx.fill()

          // Body
          ctx.fillRect(size * 0.47, size * 0.47, size * 0.06, size * 0.08)

          // Arms
          ctx.fillRect(size * 0.44, size * 0.5, size * 0.03, size * 0.04)
          ctx.fillRect(size * 0.53, size * 0.5, size * 0.03, size * 0.04)
        } else {
          // Colab-like icon
          ctx.fillRect(size * 0.44, size * 0.44, size * 0.12, size * 0.12)
          ctx.fillStyle = "#ffffff"
          ctx.fillRect(size * 0.47, size * 0.47, size * 0.06, size * 0.06)
        }
      } catch (error) {
        console.error("Error generating QR code:", error)
      }
    }

    generateQRCode()
  }, [url, size])

  return (
    <div className="border rounded-md p-2 bg-white">
      <canvas ref={canvasRef} width={size} height={size} className="max-w-full h-auto" />
    </div>
  )
}
