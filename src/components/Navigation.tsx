"use client"

import React, { useEffect, useRef, useState, useLayoutEffect } from "react"
import { motion } from "framer-motion"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { LucideIcon, Home, Box, FileText, Users, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavigationProps {
  items?: NavItem[]
  className?: string
}

const defaultItems: NavItem[] = [
  { name: "Home", url: "/", icon: Home },
  { name: "The problem", url: "/problem", icon: FileText },
  { name: "The solution", url: "/solutions", icon: Box },
  { name: "The product", url: "/products", icon: FileText },
  { name: "How it works", url: "/how-it-works", icon: Home },
  { name: "About us", url: "/about", icon: Box },
  { name: "Contact Us", url: "/contact", icon: Mail },
]

const NAV_MOBILE_BREAKPOINT = 1024 // apply mobile nav up through tablets

export function Navigation({ items = defaultItems, className }: NavigationProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name ?? "")
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navRef = useRef<HTMLDivElement | null>(null)
  const [lamp, setLamp] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < NAV_MOBILE_BREAKPOINT)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!items || items.length === 0) return
    const matched = items.reduce<NavItem | undefined>((best, it) => {
      if (location.pathname === it.url) return it
      if (location.pathname.startsWith(it.url)) {
        if (!best) return it
        return it.url.length > best.url.length ? it : best
      }
      return best
    }, undefined)
    setActiveTab(matched ? matched.name : items[0]?.name ?? "")
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [location.pathname, items])

  useLayoutEffect(() => {
    const container = navRef.current
    if (!container) return
    const selector = `[data-nav="${activeTab}"]`
    const target = container.querySelector<HTMLElement>(selector)
    if (!target) return setLamp({ left: 0, width: 0 })
    const cRect = container.getBoundingClientRect()
    const tRect = target.getBoundingClientRect()
    setLamp({ left: tRect.left - cRect.left, width: tRect.width })
  }, [activeTab, items, isMobile])

  // Mobile layout: top bar with hamburger that opens a full-width menu
  if (isMobile) {
    return (
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-background/80 border-b border-border backdrop-blur-lg",
          className,
        )}
      >
        <div className="flex items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center p-1.5">
              <img src="/Logo.png" alt="CompliLedger Logo" className="h-full w-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
            </div>
            <span className="text-sm font-semibold">CompliLedger</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 p-2 text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-border bg-background/95">
            <nav className="flex flex-col py-2">
              {items.map((item) => {
                const Icon = item.icon
                const isActive = activeTab === item.name
                return (
                  <Link
                    key={item.name}
                    to={item.url}
                    onClick={() => {
                      setActiveTab(item.name)
                      setIsOpen(false)
                    }}
                    className={cn(
                      "flex items-center gap-3 px-4 py-2 text-sm font-medium",
                      "text-foreground/80 hover:bg-muted hover:text-foreground",
                      isActive && "bg-muted text-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        className,
      )}
    >
      <div ref={navRef} className="relative flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-2 px-4 rounded-full shadow-lg overflow-visible">
        <motion.div
          className="absolute top-0 left-0 h-full bg-primary/5 rounded-full -z-10"
          initial={false}
          animate={{ x: lamp.left, width: lamp.width, opacity: lamp.width ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
            <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
            <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
            <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
          </div>
        </motion.div>

        {items.map((item, idx) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              key={item.name}
              to={item.url}
              data-nav={item.name}
              onPointerDown={(e) => {
                e.preventDefault()
                const el = e.currentTarget as HTMLElement
                const container = navRef.current
                if (container && el) {
                  const cRect = container.getBoundingClientRect()
                  const tRect = el.getBoundingClientRect()
                  setLamp({ left: tRect.left - cRect.left, width: tRect.width })
                }
                setActiveTab(item.name)
                navigate(item.url)
              }}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              {item.url === "/" ? (
                <>
                  <span className="flex items-center justify-center pl-2 pr-3">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center p-1.5">
                      <img src="/Logo.png" alt="CompliLedger Logo" className="h-full w-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                    </div>
                  </span>
                  <span className="sr-only">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                </>
              ) : (
                <>
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                </>
              )}
              {/* lamp is a single shared element positioned by `lamp` state */}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
