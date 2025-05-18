export const dynamicParams = true;
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ReactQueryProvider from "@/lib/reactQueryProvider";
export async function generateStaticParams() {
  // routing.locales içindeki dillerden static path'ler üret
  return routing.locales.map((locale) => ({ locale }));
}

const LocaleLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) => {
  // Parametreyi doğrudan destructuring ile alma
  const { locale } = (await params) || {};

  if (!locale || !hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextIntlClientProvider>
  );
};

export default LocaleLayout;
