import { createFileRoute } from "@tanstack/react-router";
import {
  Truck,
  Banknote,
  ShieldCheck,
  Zap,
  Flame,
  Heart,
  Leaf,
  Check,
  Package,
  ArrowRight,
  Sparkles,
  ShoppingCart,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import productImage from "@/assets/super-homem-plantaNatur.png.asset.json";

const CHECKOUT_URL = "https://link.conblue.app/pngwi";
const PRICE = "34,00 €";

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "Super Homem da PlantaNatur — Vitalidade Masculina Natural" },
      {
        name: "description",
        content:
          "Suplemento alimentar masculino com Ginseng, Pau de Cabinda, Ginkgo Biloba e Maca. Apoie a sua vitalidade, disposição e confiança. Entrega grátis em Portugal — pagamento na entrega.",
      },
      {
        property: "og:title",
        content: "Super Homem da PlantaNatur — Vitalidade Masculina Natural",
      },
      {
        property: "og:description",
        content:
          "Suplemento alimentar masculino com Ginseng, Pau de Cabinda, Ginkgo Biloba e Maca. Entrega grátis em Portugal — pagamento na entrega.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function CtaButton({
  children,
  className = "",
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg" | "xl";
}) {
  const sizeClasses = {
    default:
      "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  return (
    <a
      href={CHECKOUT_URL}
      className={`
        inline-flex items-center justify-center gap-2 rounded-xl font-bold
        bg-gradient-to-r from-cyan to-cyan/90
        text-white shadow-lg shadow-cyan/25
        transition-all duration-200
        hover:brightness-110 hover:shadow-xl hover:shadow-cyan/30 hover:-translate-y-0.5
        active:translate-y-0 active:brightness-95
        ${sizeClasses[size]}
        ${className}
      `}
    >
      {children}
    </a>
  );
}

function TrustPill({ icon: Icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-white/80 p-3 shadow-sm backdrop-blur-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-cyan">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-bold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function SectionTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan">{subtitle}</p>
      )}
      <h2 className="text-balance text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-sans">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-cream via-background to-background px-4 pb-12 pt-8 sm:pb-16 sm:pt-12">
        <div className="mx-auto max-w-6xl">
          {/* Top bar */}
          <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:mb-10 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-navy-foreground font-bold text-lg">
                PN
              </div>
              <span className="text-xl font-bold tracking-tight text-navy">PlantaNatur</span>
            </div>
            <div className="rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-sm font-semibold text-gold-foreground">
              Suplemento alimentar masculino
            </div>
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Text */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan/10 px-4 py-1.5 text-sm font-semibold text-cyan">
                <Sparkles className="h-4 w-4" />
                Fórmula com ingredientes de origem vegetal
              </div>

              <h1 className="text-balance text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl lg:text-6xl">
                Recupere a confiança, a disposição e a intensidade nos seus momentos íntimos.
              </h1>

              <p className="mt-5 text-balance text-lg leading-relaxed text-slate sm:text-xl">
                Conheça o Super Homem, uma fórmula com ingredientes de origem vegetal tradicionalmente utilizados para
                apoiar a vitalidade, disposição e desempenho masculino.
              </p>

              {/* Price */}
              <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:gap-4 lg:justify-start">
                <div className="rounded-2xl bg-white px-6 py-3 shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Preço de venda</p>
                  <p className="text-4xl font-black text-navy">{PRICE}</p>
                </div>
                <div className="rounded-full bg-gold px-4 py-2 text-sm font-bold text-gold-foreground shadow-sm">
                  PAGAMENTO NA ENTREGA
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
                <CtaButton size="xl">
                  <ShoppingCart className="h-5 w-5" />
                  QUERO RECEBER EM CASA
                  <ArrowRight className="h-5 w-5" />
                </CtaButton>

                <div className="grid w-full max-w-md grid-cols-1 gap-3 sm:grid-cols-3">
                  <TrustPill icon={Truck} title="ENTREGA GRÁTIS" text="Receba no conforto de casa" />
                  <TrustPill icon={Banknote} title="PAGUE AO RECEBER" text="Só paga quando receber" />
                  <TrustPill icon={ShieldCheck} title="COMPRA SEGURA" text="Encomenda simples e conveniente" />
                </div>
              </div>
            </div>

            {/* Product image */}
            <div className="order-1 flex items-center justify-center lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cyan/20 to-gold/20 blur-2xl" />
                <img
                  src={productImage.url}
                  alt="Embalagem do suplemento Super Homem da PlantaNatur com 30 comprimidos"
                  className="relative z-10 max-h-[520px] w-auto rounded-2xl object-contain drop-shadow-2xl sm:max-h-[620px]"
                  width="600"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>Já não sente a mesma energia e confiança de antes?</SectionTitle>
          <p className="mt-6 text-balance text-lg leading-relaxed text-slate">
            Com o passar do tempo, a rotina, o cansaço e o stress podem fazer com que muitos homens sintam menos
            disposição e confiança nos momentos íntimos.
          </p>
          <p className="mt-4 text-balance text-xl font-semibold text-navy">
            Foi pensando nessa necessidade que surgiu o Super Homem.
          </p>
        </div>
      </section>

      {/* PRODUCT INTRO */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <img
                src={productImage.url}
                alt="Super Homem da PlantaNatur — 30 comprimidos suplemento alimentar masculino"
                className="max-h-[420px] w-auto rounded-2xl object-contain shadow-2xl shadow-navy/10 sm:max-h-[500px]"
                width="500"
                height="500"
              />
            </div>
            <div>
              <SectionTitle subtitle="Apresentamos">Conheça o Super Homem</SectionTitle>
              <p className="mt-6 text-balance text-lg leading-relaxed text-slate">
                Uma fórmula de <strong className="text-navy">30 Comprimidos</strong> — suplemento alimentar masculino
                com <strong className="text-navy">Ginseng, Pau de Cabinda, Ginkgo Biloba e Maca</strong>, desenvolvida
                para homens que procuram apoiar a sua vitalidade, disposição, resistência e desempenho no dia a dia e
                nos momentos íntimos.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "30 comprimidos — prático para o dia a dia",
                  "Ingredientes de origem vegetal",
                  "Fórmula pensada para o bem-estar masculino",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-cyan" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <CtaButton size="lg">
                  <ShoppingCart className="h-5 w-5" />
                  QUERO RECEBER EM CASA
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle subtitle="Composição">Uma combinação de ingredientes selecionados</SectionTitle>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "GINSENG",
                text: "Tradicionalmente utilizado como tónico para apoiar a energia, disposição e resistência.",
                icon: Zap,
                color: "bg-cyan/10 text-cyan",
              },
              {
                title: "PAU DE CABINDA",
                text: "Ingrediente de utilização tradicional associado à vitalidade e ao vigor masculino.",
                icon: Flame,
                color: "bg-gold/15 text-gold-foreground",
              },
              {
                title: "GINKGO BILOBA",
                text: "Tradicionalmente utilizado em preparações relacionadas com a circulação e a vitalidade.",
                icon: Leaf,
                color: "bg-emerald-100 text-emerald-700",
              },
              {
                title: "MACA PERUANA",
                text: "Raiz tradicionalmente utilizada para apoiar a disposição, vitalidade e desejo sexual.",
                icon: Heart,
                color: "bg-rose-100 text-rose-700",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${card.color} mb-4 transition-transform group-hover:scale-110`}
                >
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-extrabold text-navy">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-navy px-4 py-16 text-navy-foreground sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan">Porquê escolher</p>
            <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
              Mais do que um suplemento. Uma escolha para cuidar da sua vitalidade.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Zap, title: "Mais disposição" },
              { icon: Heart, title: "Apoio à vitalidade e resistência" },
              { icon: Flame, title: "Apoio ao desempenho masculino" },
              { icon: Leaf, title: "Fórmula com ingredientes de origem vegetal" },
              { icon: Sparkles, title: "Mais confiança nos momentos íntimos" },
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cyan/20 text-cyan">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <p className="text-lg font-semibold">{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / COD */}
      <section className="bg-gradient-to-b from-background to-cream px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-navy/5">
            <div className="bg-cyan px-6 py-4 text-center text-cyan-foreground">
              <h2 className="text-2xl font-extrabold sm:text-3xl">COMPRE SEM COMPLICAÇÕES</h2>
            </div>
            <div className="grid gap-8 px-6 py-10 sm:grid-cols-3 sm:px-10">
              {[
                {
                  icon: Truck,
                  title: "ENTREGA GRÁTIS",
                  text: "Receba a sua encomenda em casa.",
                },
                {
                  icon: Banknote,
                  title: "PAGAMENTO NA ENTREGA",
                  text: "Não precisa pagar antecipadamente.",
                },
                {
                  icon: ShieldCheck,
                  title: "PROCESSO SIMPLES E SEGURO",
                  text: "Preencha os seus dados no checkout e aguarde a confirmação da encomenda.",
                },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan/10 text-cyan">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mt-4 text-lg font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESIRE */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle>Está na hora de voltar a sentir-se confiante.</SectionTitle>
          <p className="mt-6 text-balance text-lg leading-relaxed text-slate">
            Se procura uma forma prática de complementar a sua rotina e cuidar da sua vitalidade masculina, o Super
            Homem pode fazer parte do seu dia a dia.
          </p>
          <div className="mt-8">
            <CtaButton size="xl">
              <ShoppingCart className="h-5 w-5" />
              QUERO RECEBER EM CASA
            </CtaButton>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionTitle subtitle="Dúvidas frequentes">FAQ</SectionTitle>

          <Accordion type="single" collapsible className="mt-10">
            {[
              {
                q: "O que é o Super Homem?",
                a: "É um suplemento alimentar com uma combinação de ingredientes de origem vegetal destinado a complementar a rotina de homens que procuram apoiar a sua vitalidade e disposição.",
              },
              {
                q: "Como recebo a encomenda?",
                a: "A encomenda é entregue no endereço indicado no checkout.",
              },
              {
                q: "Como funciona o pagamento?",
                a: "O pagamento é feito no momento da entrega, conforme as condições apresentadas no checkout.",
              },
              {
                q: "A entrega é grátis?",
                a: "Sim, a oferta apresentada nesta página inclui entrega grátis.",
              },
              {
                q: "Como faço o pedido?",
                a: "Clique em 'QUERO RECEBER EM CASA', preencha os seus dados no checkout e aguarde a confirmação da encomenda.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-base font-bold text-navy hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-slate">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-navy px-4 py-16 text-navy-foreground sm:py-24">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-5xl">
            Dê o próximo passo para cuidar da sua vitalidade.
          </h2>
          <p className="mt-5 text-lg text-navy-foreground/80">
            Faça o seu pedido agora e receba o Super Homem no conforto da sua casa.
          </p>

          <div className="mt-8 flex flex-col items-center gap-6">
            <div className="rounded-2xl bg-white/10 px-6 py-3 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Apenas</p>
              <p className="text-5xl font-black text-white">{PRICE}</p>
            </div>

            <CtaButton size="xl" className="bg-white text-navy hover:bg-white/90 hover:shadow-white/20">
              <ShoppingCart className="h-5 w-5" />
              QUERO RECEBER EM CASA
            </CtaButton>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-navy-foreground/90">
              <span className="flex items-center gap-1.5">
                <Truck className="h-4 w-4 text-cyan" /> Entrega grátis
              </span>
              <span className="flex items-center gap-1.5">
                <Banknote className="h-4 w-4 text-cyan" /> Pague ao receber
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-cyan" /> Compra segura
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background px-4 py-10">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-navy text-navy-foreground font-bold text-sm">
              PN
            </div>
            <span className="text-lg font-bold text-navy">PlantaNatur</span>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Super Homem é um suplemento alimentar. Os suplementos alimentares não devem ser utilizados como substitutos
            de um regime alimentar variado e equilibrado nem de um estilo de vida saudável. Mantenha fora do alcance das
            crianças. Em caso de dúvida, consulte um profissional de saúde.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} PlantaNatur. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-navy p-3 shadow-2xl md:hidden">
        <a
          href={CHECKOUT_URL}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan to-cyan/90 py-3.5 text-base font-bold text-white shadow-lg transition-all active:scale-[0.98]"
        >
          <ShoppingCart className="h-5 w-5" />
          QUERO RECEBER EM CASA
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </main>
  );
}
