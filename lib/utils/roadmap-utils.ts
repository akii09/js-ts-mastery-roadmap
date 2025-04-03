import { toast } from '@/components/ui/use-toast'

/**
 * Share the roadmap using the Web Share API if available, otherwise copy URL to clipboard
 */
export async function shareRoadmap() {
  const title = 'JavaScript & TypeScript Mastery Roadmap'
  const text = 'Check out this comprehensive roadmap to mastering JavaScript and TypeScript!'
  const url = window.location.href

  // Check if Web Share API is available
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      })
      toast({
        title: "Shared successfully!",
        description: "The roadmap has been shared.",
      })
    } catch (error) {
      console.error('Error sharing:', error)
      fallbackShare()
    }
  } else {
    fallbackShare()
  }
}

/**
 * Fallback sharing method - copy URL to clipboard
 */
function fallbackShare() {
  const url = window.location.href
  navigator.clipboard.writeText(url)
    .then(() => {
      toast({
        title: "Link copied!",
        description: "The roadmap URL has been copied to your clipboard.",
      })
    })
    .catch(err => {
      console.error('Failed to copy URL: ', err)
      toast({
        title: "Failed to copy",
        description: "Could not copy the URL to clipboard.",
        variant: "destructive",
      })
    })
}

/**
 * Download the roadmap as a PDF from the public folder
 */
export function downloadAsPDF() {
  try {
    // Show loading toast
    toast({
      title: "Downloading PDF",
      description: "Your roadmap PDF is being downloaded...",
    })

    const fileName = 'Ultimate-Roadmap-to-Mastering-JavaScript-&-TypeScript(2025-2026).pdf'

    // Create a link element
    const link = document.createElement('a')
    link.href = `/${fileName}`
    link.download = fileName
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Show success toast
    toast({
      title: "Download complete!",
      description: "Your roadmap PDF has been downloaded.",
    })
  } catch (error) {
    console.error('Error downloading PDF:', error)
    toast({
      title: "Failed to download PDF",
      description: "An error occurred while downloading your PDF. Please try again.",
      variant: "destructive",
    })
  }
} 