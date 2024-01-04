import Image from "next/image";
import { Service } from "./components/Service";
import { Item } from "./components/Item";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[100vh] container mx-auto flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-bold text-[1.1em] xs:text-[1.2em] xsBig:text-[1.5em] sm:text-[2em] md:text-[2.3em] mb-6">
          DDT Interactive
        </h1>
        <div>
          <div className="flex flex-col-reverse md:flex-row items-center">
            <p className="text-left font-medium leading-8">
              Bine ați venit la DDT Interactive Group, agenția de publicitate
              care redefinește standardele în servicii de publicitate !<br />
              Suntem o echipă pasionată și dedicată, gata să ofere soluții
              digitale inovatoare pentru afacerea ta.
              <br />
              Cu sediul în Arad, suntem partenerul tău de încredere în
              promovarea afacerii tale. Echipa noastră pasionată oferă soluții
              de promovare inovatoare, transformând afacerea ta într-un brand
              recunoscut.
              <br />
            </p>
            <Image
              src={"/ddt-interactive.jpg"}
              width={1563}
              height={1563}
              className="rounded-md object-cover w-full h-full max-w-[350px] max-h-[350px]"
              priority
              quality={100}
              alt="ddt-interactive-library"
            />
          </div>
          <div className="flex flex-col xl:flex-row gap-6 mt-8">
            <Image
              src={"/ddt-interactive-library.jpg"}
              width={1024}
              height={1024}
              className="rounded-md object-cover w-full mx-auto h-[420px] 2xl:max-w-[400px]"
              priority
              quality={100}
              alt="ddt-interactive-library"
            />

            <div className="flex flex-col gap-4 items-center">
              <div className="flex flex-col lg:flex-row items-center gap-3">
                <Service
                  title="Publicitate Stradala:"
                  description="Succesul afacerii tale depinde de vizibilitate. Creem campanii publicitare in zone centrale din Arad, pe structuri tip mesh, bannere și panouri LED atractive."
                />
                <Service
                  title="Publicitate Online:"
                  description="Creăm campanii publicitare online personalizate, maximizând vizibilitatea și impactul afacerii tale."
                />
                <Service
                  title="Design Grafic:"
                  description="Oferim servicii de design grafic pentru a comunica eficient mesajul brandului tău într-un mod atractiv și memorabil."
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Service
                  title="Strategii Digitale:"
                  description=" Dezvoltăm strategii digitale personalizate, adaptate nevoilor tale specifice, pentru a obține rezultate deosebite."
                />
                <Service
                  title="Social Media Management:"
                  description="Gestionăm și optimizăm prezența ta pe platformele de social media, construind o comunitate angajată și loială."
                />
              </div>
            </div>
          </div>
          <div className="my-8 flex flex-col md:flex-row">
            <div className="flex-1 flex flex-col gap-3">
              <Item
                title="De Ce DDT Interactive Group?"
                description="
              Creativitate Fără Limite: Suntem pasionați de idei inovatoare și abordări creative care aduc valoare afacerii tale.
              "
              />
              <Item
                title="Parteneriat de Încredere:"
                description="
              Colaborarea cu noi înseamnă un parteneriat de încredere, unde ne angajăm să atingem obiectivele comune.
              "
              />
              <Item
                title="Rezultate Măsurabile:"
                description="
              Cu un focus deosebit pe analitică și măsurare a performanței, garantăm rezultate tangibile pentru afacerea ta.
              "
              />
            </div>
            <div className="flex-1 mt-8 md:mt-0">
            <p className="font-bold">Contactează-ne la 0742116123</p>
             și descoperă puterea
             <Link href={"https://wa.me/+40742116123"} className="block mt-3 bg-green-600 p-2 rounded-md text-white w-fit mx-auto text-sm hover:bg-green-700 transition-colors">Contactează-ne</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
