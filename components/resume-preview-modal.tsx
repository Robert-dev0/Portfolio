'use client'

import { useState, useEffect } from 'react'
import { Download, Loader2, FileText, ExternalLink } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface ResumePreviewModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  /**
   * Caminho para o PDF dentro de `/public`
   * Ex.: '/resume.pdf'
   */
  resumeUrl?: string
}

export function ResumePreviewModal({
  open,
  onOpenChange,
  resumeUrl = '/CurriculoFullStack.pdf',
}: ResumePreviewModalProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Reset de estado sempre que o modal abre
  useEffect(() => {
    if (open) {
      setIsLoading(true)
      setHasError(false)
    }
  }, [open])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  const handleIframeError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'curriculo-robert-kawan.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleOpenInNewTab = () => {
    window.open(resumeUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex w-[95vw] max-w-5xl max-h-[90vh] flex-col p-0">
        <DialogHeader className="border-b px-6 pt-6 pb-4">
          <DialogTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Currículo - Robert Kawan
          </DialogTitle>
        </DialogHeader>

        {/* Área de pré-visualização com fundo escuro e PDF centralizado */}
        <div className="flex-1 overflow-hidden bg-[#121212] flex items-center justify-center">
          <div className="relative h-[70vh] w-full overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#1a1a1a]">
                <Loader2 className="h-8 w-8 animate-spin text-accent" />
              </div>
            )}

            {hasError ? (
              <div className="flex h-full items-center justify-center p-8">
                <div className="text-center">
                  <p className="mb-4 text-muted-foreground">
                    Não foi possível carregar a pré-visualização do currículo.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Verifique se o arquivo PDF existe na pasta{' '}
                    <span className="font-mono">/public</span> e o caminho
                    configurado em <span className="font-mono">resumeUrl</span>.
                  </p>
                </div>
              </div>
            ) : (
              <iframe
                src={resumeUrl}
                className="w-full h-full border-0"
                title="Pré-visualização do Currículo"
                onLoad={handleIframeLoad}
                onError={handleIframeError}
              />
            )}
          </div>
        </div>

        {/* Rodapé com ações – download só aqui */}
        <div className="flex gap-3 border-t bg-background px-6 py-4">
          <Button
            onClick={handleDownload}
            className="flex flex-1 items-center justify-center gap-2"
            disabled={hasError}
          >
            <Download size={18} />
            Baixar Currículo PDF
          </Button>
          <Button
            onClick={handleOpenInNewTab}
            variant="outline"
            className="flex flex-1 items-center justify-center gap-2"
          >
            <ExternalLink size={18} />
            Abrir em outra aba
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


