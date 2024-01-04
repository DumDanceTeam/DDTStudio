import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface LandingProps {
  label?: string;
}

const Landing: React.FC<LandingProps> = ({ label}) => {
  return (
    <div className="flex flex-col items-center sm:gap-10 mx-2 text-white">
        <div className="flex justify-center">
            <Link href="/" prefetch={true} className="cursor-pointer">
              <Image
                loading="lazy"
                src={"/ddt-white.png"}
                quality={100}
                height={500}
                width={1000}
                alt="logo"
                className="mx-auto w-full max-w-[500px] lg:w-[1000px] sm:mb-10"
              />
            </Link>
        </div>

        <div className="w-full flex flex-col items-center justify-center md:items-start">
          <p className="font-bold text-center w-full mb-3 text-[.9em] xss:text-[1.05em] xs:text-[1.25em] xsBig:text-[1.3em] sm:text-[1.4em] md:text-[1.7em] lg:text-[3em] text-ddtWhite font-roboto tracking-wider whitespace-break-spaces">
            <span className="text-slate-700 ">&quot;</span>{" "}
            {label && label.trim() !== ""
              ? label
              : "Educație prin mișcare, performanță prin dedicare !"}{" "}
            <span className="text-slate-700">&quot;</span>
          </p>
          <div className="flex justify-center">
          <p className="text-center text-sm">
          Descoperă excelenta în servicii digitale cu S.C DDT INTERACTIVE GROUP S.R.L! Cu sediul în Arad str. Vaslui, nr. 7, bloc 723, sc. B, et. 1, ap. 5, judetul Arad,<br/> suntem partenerul tău de încredere în mediul online. Oferim soluții digitale inovatoare pentru afacerea ta, gestionate de echipa noastră pasionată.<br/> CUI: 46900400, Reg. Com.: J2/1818/23.09.2022, IBAN: RO49RNCB0857174623880001 la BCR.<br/> Contactează-ne la lilidumitrascu69@gmail.com sau la 0742116123 și descoperă cum putem transforma visurile tale digitale în realitate!
          </p>
          </div>
          
          <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
            
              <Link target="_blank" href="https://dumdanceteam.com/#faq" className="max-w-full">
                <Button
                  aria-label="Programează o ședință gratuită"
                  variant={"fill"}
                  className="text-xs xss:text-[.5em] xs:text-[.9em] xsBig:text-[1em] sm:text-[1.1em] flex whitespace-break-spaces items-center w-full gap-2 xs:p-2"
                >
                  <span>
                    Programează o ședință
                    <span className="font-bold"> gratuită</span>
                  </span>
                </Button>
              </Link>

           
              <Link target="_blank" href="https://dumdanceteam.com/#faq" className="max-w-content">
                <Button
                  variant={"fill"}
                  className="bg-transparent text-xs xss:text-[.5em] xs:text-[.9em] xsBig:text-[1em] sm:text-[1.1em] flex whitespace-break-spaces items-center w-full gap-2 p-2"
                >
                  Întrebări frecvente{" "}
                  <ArrowRight className="font-bold text-[1.3em]" />
                </Button>
              </Link>
          </div>
        </div>
        <div className="hidden md:block mt-6 w-full space-y-2">
          <p className="text-ddtWhite tracking-tight leading-8 font-medium text-[1.1em] opacity-[0.8] text-center">
            Ne găsiți și pe rețelele de socializare !
          </p>
        </div>
    </div>
  );
};

export default Landing;