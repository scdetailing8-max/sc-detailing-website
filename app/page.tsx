"use client";

import React from "react";
import { motion } from "framer-motion";
import { Car, Sparkles, ShieldCheck, CalendarCheck, Phone, Droplets, Star, CheckCircle, BadgeDollarSign, MapPin } from "lucide-react";import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function SCDetailingWebsite() {
  const services = [
    {
      icon: Sparkles,
      title: "Interior Detail",
      price: "Starting at $125",
      description: "Deep vacuum, wipe down, plastics cleaned, cup holders, vents, doors, seats, carpets, and interior surfaces refreshed.",
    },
    {
      icon: Droplets,
      title: "Exterior Detail",
      price: "Starting at $100",
      description: "Foam wash, wheel cleaning, tire shine, bug removal, hand wash, and a clean finish that brings back curb appeal.",
    },
    {
      icon: Car,
      title: "Full Detail",
      price: "Starting at $200",
      description: "Interior and exterior combined for the best overall refresh. Perfect before selling, after winter, or for a reset clean.",
    },
    {
      icon: ShieldCheck,
      title: "Add-Ons",
      price: "Quoted by condition",
      description: "Shampoo, stain treatment, pet hair removal, wax, odor treatment, and extra-heavy cleaning available when needed.",
    },
  ];

  const benefits = [
    "Mobile service that comes to you",
    "Professional results without dealership pricing",
    "Honest quotes based on vehicle condition",
    "Interior, exterior, full details, and maintenance plans",
    "Before and after photos so you can see the difference",
  ];

  const packages = [
    {
      title: "Basic Refresh",
      bestFor: "Lightly dirty vehicles",
      items: ["Vacuum", "Interior wipe down", "Windows", "Quick exterior wash option"],
    },
    {
      title: "Deep Interior",
      bestFor: "Daily drivers, work trucks, family cars",
      items: ["Detailed vacuum", "Cracks and crevices", "Plastics and panels cleaned", "Optional shampoo add-on"],
    },
    {
      title: "Full Detail",
      bestFor: "Best overall value",
      items: ["Interior detail", "Exterior wash", "Wheels and tires", "Clean finish inside and out"],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 bg-neutral-950/90 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
           <img
  src="/logo.png"
  alt="SC Detailing Logo"
  className="h-16 w-auto object-contain"
/>
            
          </div>
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a href="#services" className="hover:text-red-400 transition">Services</a>
            <a href="#results" className="hover:text-red-400 transition">Results</a>
            <a href="#plans" className="hover:text-red-400 transition">Plans</a>
            <a href="#contact" className="hover:text-red-400 transition">Contact</a>
          </nav>
          <a href="tel:8594468778">
  <Button className="rounded-full bg-red-500 hover:bg-red-600">
    Book Now
  </Button>
</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,28,28,0.45),transparent_34%),linear-gradient(120deg,rgba(10,10,10,1),rgba(10,10,10,0.82),rgba(10,10,10,1))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-neutral-200 mb-6">
              <Star className="h-4 w-4 text-red-400" /> Premium mobile detailing that comes to you
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              Bring your vehicle back to clean without leaving your driveway.
            </h1>
            <p className="mt-6 text-lg text-neutral-300 leading-8 max-w-xl">
              SC Detailing provides professional mobile interior and exterior detailing for cars, trucks, SUVs, work vehicles, and daily drivers.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
             <a href="https://sc-detailing8.square.site/" target="_blank">
 <a href="https://sc-detailing8.square.site/" target="_blank">
  <Button className="bg-red-600 hover:bg-red-700 text-white">
    Book Your Detail
  </Button>
</a>

<a href="sms:8594468778?body=Hi%20SC%20Detailing,%20I%20want%20a%20quote">
  <Button className="border border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
    Get a Quote
  </Button>
</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-lg">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-2xl font-black">100%</p>
                <p className="text-xs text-neutral-400 mt-1">Mobile Service</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-2xl font-black">$125+</p>
                <p className="text-xs text-neutral-400 mt-1">Interiors</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                <p className="text-2xl font-black">Local</p>
                <p className="text-xs text-neutral-400 mt-1">Service Area</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="rounded-[2rem] bg-gradient-to-br from-neutral-800 to-neutral-950 border border-white/10 p-5 shadow-2xl">
              <div className="aspect-[4/3] rounded-[1.5rem] border border-white/10 overflow-hidden relative">
                <img
                  src="/dash.JPG"
                  alt="Clean detailed vehicle interior"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-3xl font-black">Clean Results.</p>
                  <p className="mt-2 text-neutral-200">Interior • Exterior • Full Details</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-sm text-neutral-400">Most Popular</p>
                  <p className="font-bold mt-1">Full Detail</p>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <p className="text-sm text-neutral-400">Fast Booking</p>
                  <p className="font-bold mt-1">Message To Schedule</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.22em] text-red-400 font-bold">Services</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">Detailing packages built for real vehicles.</h2>
            <p className="mt-4 text-neutral-400 leading-7">
              From daily driver interiors to full cleanups, SC Detailing gives your vehicle the reset it needs.
            </p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.title} className="rounded-3xl bg-neutral-900 border-white/10 text-white shadow-xl hover:-translate-y-1 transition">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-2xl bg-red-700/20 flex items-center justify-center mb-5">
                      <Icon className="h-6 w-6 text-red-400" />
                    </div>
                    <h3 className="text-xl font-black">{service.title}</h3>
                    <p className="mt-2 text-red-400 font-bold">{service.price}</p>
                    <p className="mt-3 text-neutral-400 leading-7">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 bg-white text-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-red-700 font-bold">Before & After</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">Real results people can actually see.</h2>
            <p className="mt-5 text-neutral-600 leading-8">
              The best way to sell detailing is simple: show the transformation. Add your strongest before and after photos here to prove the value instantly.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-red-700 shrink-0 mt-0.5" />
                  <p className="font-medium text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-3xl aspect-[4/5] overflow-hidden relative shadow-xl">
              <img src="/before4.JPG" alt="Truck interior before detail" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-5 left-5 text-2xl font-black text-white">Before</p>
            </div>
            <div className="rounded-3xl aspect-[4/5] overflow-hidden relative shadow-2xl">
              <img src="/after4.JPG" alt="Truck interior after detail" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-5 left-5 text-2xl font-black text-white">After</p>
            </div>
            <div className="col-span-2 grid grid-cols-2 gap-4">
              <div className="rounded-3xl aspect-[4/3] overflow-hidden relative shadow-xl">
                <img src="/seatbefore.JPG" alt="Seat Before" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-xl font-black text-white">Seat Before</p>
              </div>
              <div className="rounded-3xl aspect-[4/3] overflow-hidden relative shadow-xl">
<img src="/seatafter.JPG" alt="Seat After" className="w-full h-full object-cover" />                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-xl font-black text-white">Seat After</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="py-20 bg-neutral-100 text-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.22em] text-red-700 font-bold">Packages</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">Choose the clean that fits your vehicle.</h2>
            <p className="mt-4 text-neutral-600 leading-7">
              Final pricing depends on size and condition. Heavy pet hair, staining, and excessive dirt may require an add-on.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={pkg.title} className={`rounded-3xl border-0 shadow-xl ${index === 2 ? "bg-neutral-950 text-white" : "bg-white text-neutral-950"}`}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-black">{pkg.title}</h3>
                    {index === 2 && <BadgeDollarSign className="h-7 w-7 text-red-400" />}
                  </div>
                  <p className={`mt-2 ${index === 2 ? "text-red-400" : "text-red-700"} font-bold`}>{pkg.bestFor}</p>
                  <div className="mt-6 space-y-4">
                    {pkg.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className={`h-5 w-5 shrink-0 mt-0.5 ${index === 2 ? "text-red-400" : "text-red-700"}`} />
                        <p className={index === 2 ? "text-neutral-300" : "text-neutral-700"}>{item}</p>
                      </div>
                    ))}
                  </div>
                  <a href="sms:8594468778?body=Hey,%20I’d%20like%20a%20quote%20for%20a%20detail.">
  <Button>
    Request Quote
  </Button>
</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-700 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <CalendarCheck className="h-12 w-12 mx-auto" />
          <h2 className="mt-5 text-3xl sm:text-4xl font-black tracking-tight">Want to keep your vehicle clean every month?</h2>
          <p className="mt-4 text-red-50 text-lg leading-8">
            Ask about maintenance details for repeat customers, work trucks, family vehicles, and fleet accounts.
          </p>
          <a href="sms:8594468778?body=Hey%20SC%20Detailing,%20I’m%20interested%20in%20your%20monthly%20maintenance%20plans.">
  <Button className="mt-8 rounded-xl bg-white text-red-700 hover:bg-neutral-100 px-8 py-6 text-base">
    Ask About Monthly Plans
  </Button>
</a>
        </div>
      </section>

      <section id="contact" className="py-20 bg-neutral-950 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-red-400 font-bold">Book Now</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">Get your vehicle on the schedule.</h2>
            <p className="mt-5 text-neutral-400 leading-8">
              Send a message with your vehicle type, what service you want, and a few photos if the vehicle is heavily dirty. You’ll get a clear quote before booking.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-red-400" />
                <p>859-446-8778</p>
              </div>
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-red-400" />
                <p>Serving Versailles, Indiana and surrounding areas</p>
              </div>
            </div>
          </div>

          <Card className="rounded-3xl bg-white text-neutral-950 border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-black">Request a Detail</h3>
              <div className="mt-6 space-y-4">
                <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-700" placeholder="Your name" />
                <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-700" placeholder="Phone number" />
                <select className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-700">
                  <option>What service do you need?</option>
                  <option>Interior Detail</option>
                  <option>Exterior Detail</option>
                  <option>Full Detail</option>
                  <option>Monthly Maintenance</option>
                  <option>Fleet / Work Vehicle</option>
                </select>
                <textarea className="w-full min-h-32 rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-700" placeholder="Vehicle type, condition, and what you want cleaned" />
                <a href="sms:8594468778?body=Hey%20SC%20Detailing,%20I’d%20like%20to%20book%20a%20detail.">
  <Button className="w-full rounded-xl bg-red-700 hover:bg-red-800 text-white">
    Send Booking Request
  </Button>
</a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-neutral-950 border-t border-white/10 text-neutral-500 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} SC Detailing. All rights reserved.</p>
          <p>Professional Results. Honest Service.</p>
        </div>
      </footer>
    </div>
  );
}
