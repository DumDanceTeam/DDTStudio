import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = "DDT Studio",
  description = " Bine ați venit la DDT Interactive Group, agenția de publicitate care redefinește standardele în servicii de publicitate ! Suntem o echipă pasionată și dedicată, gata să ofere soluții digitale inovatoare pentru afacerea ta.Cu sediul în Arad, suntem partenerul tău de încredere în promovarea afacerii tale. Echipa noastră pasionată oferă soluții de promovare inovatoare, transformând afacerea ta într-un brand recunoscut.",
  image = "/ddt-interactive.jpg",
  icons = "/ddt-interactive.jpg",
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean,
  keywords?: string[],
} = {}): Metadata {
  return {
    title,
    keywords:["DDT Studio","Agentie publicitara","publicitate arad","Interactive"],
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ]
    },
    icons,
    metadataBase: new URL('https://ddt-studio.com/'),
    themeColor: '#FFF',
    ...(noIndex && {
      robots: {
        index: true,
        follow: true
      }
    })
  }
}