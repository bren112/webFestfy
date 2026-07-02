"use client";

import { useState } from "react";
import { Search, Menu, X, Calendar, Ticket, User, ChevronDown } from "lucide-react";

export default function Header() {
    // Estado para controlar se o menu mobile está aberto ou fechado
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">

                    {/* ============================================
                        LOGO FESTFY
                    ============================================ */}
                    <div className="flex items-center flex-shrink-0">
                        <div className="relative">

                            <div className="absolute -bottom-1 -left-1">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[0.02em] text-black opacity-100"
                      style={{
                          fontFamily: "'Impact', 'Arial Black', sans-serif",
                          textTransform: "uppercase",
                          transform: "scaleY(1.05)"
                      }}>
                  FESTFY
                </span>
                            </div>
                            <div className="relative">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[0.02em] text-white"
                      style={{
                          fontFamily: "'Impact', 'Arial Black', sans-serif",
                          textTransform: "uppercase",
                          transform: "scaleY(1.05)",
                          textShadow: `
                          -3px -3px 0 #000,
                          3px -3px 0 #000,
                          -3px 3px 0 #000,
                          3px 3px 0 #000,
                          4px 0 0 #000,
                          0 4px 0 #000,
                          -4px 0 0 #000,
                          0 -4px 0 #000,
                          4px 4px 0 #000,
                          -4px -4px 0 #000,
                          4px -4px 0 #000,
                          -4px 4px 0 #000
                        `
                      }}>
                  FESTFY
                </span>
                            </div>
                        </div>
                    </div>

                    {/* ============================================
                        CAMPO DE BUSCA - Desktop
                        ============================================ */}
                    <div className="hidden lg:flex flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Buscar experiências"
                                className="w-full px-5 py-2.5 pl-12 bg-gray-100 border-2 border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all duration-200"
                                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                            />
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                        </div>
                    </div>

                    {/* ============================================
                         MENU DE NAVEGAÇÃO - Desktop
                        ============================================ */}
                    <nav className="hidden lg:flex items-center gap-3" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 rounded-lg transition-all duration-200"
                        >
                            {/* <Ticket className="w-4 h-4" />*/}
                            Criar evento
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 rounded-lg transition-all duration-200 flex items-center gap-1.5"
                        >
                            <Calendar className="w-4 h-4" />
                            Meus eventos
                        </a>
                        <a
                            href="#"
                            className="px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 rounded-lg transition-all duration-200 flex items-center gap-1.5"
                        >
                            <Ticket className="w-4 h-4" />
                            Meus ingressos
                        </a>

                        {/* Divisor visual */}
                        <div className="w-px h-6 bg-gray-300 mx-3"></div>

                        {/* Avatar do usuário */}
                        <button className="ml-1 flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-all duration-200 group">
                            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-semibold text-sm">
                                <User className="w-4 h-4" />
                            </div>
                            <ChevronDown className="w-4 h-4 text-black group-hover:text-gray-600 transition-colors" />
                        </button>
                    </nav>

                    {/* ============================================
              BOTÃO DO MENU MOBILE - Sanduíche
              ============================================ */}
                    <button
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-all"
                        onClick={() => setMenuAberto(!menuAberto)}
                    >
                        {menuAberto ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
                    </button>
                </div>
            </div>

            {/* ============================================
          MENU MOBILE - Aparece quando menuAberto = true
          ============================================ */}
            {menuAberto && (
                <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-5 space-y-4 shadow-lg">
                    {/* Busca no mobile */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar experiências"
                            className="w-full px-4 py-2.5 pl-10 bg-gray-100 border-2 border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black transition-all"
                            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                    </div>

                    {/* Links do menu mobile */}
                    <div className="space-y-1">
                        <a href="#" className="block px-3 py-2.5 text-sm font-medium text-black hover:bg-gray-100 rounded-lg transition-all">
                            {/*<Ticket className="w-4 h-4" />*/}
                            Criar evento
                        </a>
                        <a href="#" className="block px-3 py-2.5 text-sm font-medium text-black hover:bg-gray-100 rounded-lg transition-all flex items-center gap-2.5">
                            <Calendar className="w-4 h-4" />
                            Meus eventos
                        </a>
                        <a href="#" className="block px-3 py-2.5 text-sm font-medium text-black hover:bg-gray-100 rounded-lg transition-all flex items-center gap-2.5">
                            <Ticket className="w-4 h-4" />
                            Meus ingressos
                        </a>
                    </div>

                    {/* Botão de entrada no mobile */}
                    <button className="w-full bg-black text-white rounded-xl py-2.5 font-medium hover:bg-gray-800 transition-colors">
                        Entrar
                    </button>
                </div>
            )}
        </header>
    );
}