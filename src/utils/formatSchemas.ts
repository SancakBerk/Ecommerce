import { object, string } from "yup";

const noNumbersRegex = /^[^0-9]*$/;

export const personalBillingConfirmation = object({
  firstName: string()
    .required("İsim zorunludur")
    .matches(noNumbersRegex, "İsim sayı içeremez"),
  lastName: string()
    .required("Soyisim zorunludur")
    .matches(noNumbersRegex, "Soyisim sayı içeremez"),
  email: string().email("Geçerli bir email girin").required("Email zorunludur"),
  phoneNumber: string().required("Telefon numarası zorunludur"),
  streetAdress: string().required("Adres zorunludur"),
  townCity: string()
    .required("Şehir zorunludur")
    .matches(noNumbersRegex, "Şehir adı sayı içeremez"),
  country: string()
    .required("Ülke zorunludur")
    .matches(noNumbersRegex, "Ülke adı sayı içeremez"),
  postalCode: string().required("Posta kodu zorunludur"),
});
