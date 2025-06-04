"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser } from "@/services/productService";
import { authResponseType, userType } from "@/types/globalTypes";
import { useTranslations } from "next-intl";

const LoginAndSignUpForm: React.FC = () => {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const t = useTranslations("loginAndSignUp");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.password) {
      setError("Lütfen e-posta ve şifreyi doldurun.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3005/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = (await response.json()) as authResponseType;
      if (response.ok) {
        localStorage.setItem("token", result.accessToken);
        localStorage.setItem("userId", result.userId);
        console.log("response", response);
        router.push("/Home");
      } else {
        setError("Giriş başarısız.");
      }
    } catch {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.password || !formData.name) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Şifreler eşleşmiyor.");
      return;
    }

    const user: userType = {
      email: formData.email,
      password: formData.password,
      name: formData.name,
    };

    try {
      const response = await createUser(user); // Token artık gerekli değil, boş string geçiyoruz

      if (response.success && response.data) {
        const loginResponse = await fetch("http://localhost:3005/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        const loginResult = await loginResponse.json();
        if (loginResponse.ok) {
          localStorage.setItem("token", loginResult.accessToken);
          console.log("token", loginResult);
          router.push("/Home");
        } else {
          setError("Kayıt başarılı, ancak giriş yapılamadı.");
        }
      } else {
        setError(response.message || "Kayıt başarısız.");
      }
    } catch {
      setError("Bir hata oluştu. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <div className="w-[90vw] h-[80%] flex rounded-lg shadow-lg overflow-hidden">
        {/* Sol Taraf - Form Alanı */}
        <div className="w-1/2 p-10 bg-white flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-2">
            {isSignup ? t("signUp") : t("login")}
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            {isSignup ? t("alreadyHaveAnAccount") : t("doNotHaveAnAccount")}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? t("login") : t("signUp")}
            </span>
          </p>

          <form onSubmit={isSignup ? handleSignup : handleLogin}>
            {isSignup && (
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-1">
                  Tam Ad
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
                  placeholder="Tam adınızı girin"
                />
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm mb-1">
                {isSignup ? "E-posta" : "E-posta veya Telefon"}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
                placeholder={
                  isSignup
                    ? "E-posta adresinizi girin"
                    : "E-posta veya telefon numaranızı girin"
                }
              />
            </div>

            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm mb-1">Şifre</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
                placeholder="Şifrenizi girin"
              />
              <span
                className="absolute right-3 top-10 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {isSignup && (
              <div className="mb-4 relative">
                <label className="block text-gray-700 text-sm mb-1">
                  Şifreyi Onayla
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-300"
                  placeholder="Şifrenizi tekrar girin"
                />
              </div>
            )}

            {isSignup && (
              <div className="mb-4 flex items-center">
                <input type="checkbox" required className="mr-2 w-4 h-4" />
                <label className="text-gray-600 text-xs">
                  Hizmet Şartları ve Gizlilik Politikasını okudum ve kabul
                  ediyorum.
                </label>
              </div>
            )}

            {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
            >
              {isSignup ? "Hesap Oluştur" : "Giriş Yap"}
            </button>

            {!isSignup && (
              <p className="text-center mt-4">
                <span className="text-blue-500 cursor-pointer hover:underline text-sm">
                  Şifrenizi mi unuttunuz?
                </span>
              </p>
            )}
          </form>
        </div>

        {/* Sağ Taraf - Görsel Alanı */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default LoginAndSignUpForm;
