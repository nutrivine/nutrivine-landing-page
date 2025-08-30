"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function LandingPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      id: 0,
      title: "Smart Daily Tracking",
      description:
        "Track your daily nutrition with beautiful circular progress indicators. Monitor calories, macros, and water intake with our intuitive journal interface that makes logging meals effortless and engaging.",
      image: "/app-screenshot-journal.jpeg",
      icon: "📊",
    },
    {
      id: 1,
      title: "Monthly Progress Calendar",
      description:
        "Visualize your nutrition journey with our monthly calendar view. Each day shows your progress rings, making it easy to spot patterns and maintain consistency in your healthy eating habits.",
      image: "/app-screenshot-calendar.jpeg",
      icon: "📅",
    },
    {
      id: 2,
      title: "Advanced Analytics",
      description:
        "Dive deep into your nutrition data with comprehensive charts and trend analysis. Track key metrics over time, monitor weight progress, and get insights that help you make informed decisions about your health.",
      image: "/app-screenshot-analytics.jpeg",
      icon: "📈",
    },
    {
      id: 3,
      title: "Detailed Nutrition Insights",
      description:
        "Get complete nutritional breakdowns with goal tracking for all macronutrients. Our smart system shows you exactly where you stand and suggests activities to help you reach your daily targets.",
      image: "/app-screenshot-nutrition.jpeg",
      icon: "🎯",
    },
    {
      id: 4,
      title: "Personalized Goal Setting",
      description:
        "Customize your nutrition goals with precision. Set macro percentages, calorie targets, and track multiple nutrients with our flexible goal system that adapts to your unique dietary needs and preferences.",
      image: "/app-screenshot-goals.jpeg",
      icon: "⚙️",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F1419] text-white">
      {/* Header */}
      <header className="border-b border-[#2A3138] bg-[#141920] sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/nutrivine-logo.png"
              alt="Nutrivine Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h1 className="text-2xl font-bold text-white">Nutrivine</h1>
          </div>
          <Button className="bg-[#2D5A3D] hover:bg-[#22C55E] text-white border-0">
            Coming Soon
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-[#22C55E] rounded-full opacity-5 blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-48 h-48 bg-[#2D5A3D] rounded-full opacity-5 blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          ></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Badge className="mb-6 bg-[#2D5A3D] text-white hover:bg-[#2D5A3D] animate-pulse">
            Coming Soon
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-balance">
            <span className="text-[#22C55E]">Eat Smarter,</span> Live Better
          </h2>
          <p className="text-xl text-[#B8C5D1] mb-8 max-w-2xl mx-auto text-pretty">
            Transform your health with AI-powered nutrition tracking,
            personalized insights, and seamless meal logging. Your journey to
            better nutrition starts here.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {/* <Button
              size="lg"
              className="bg-[#22C55E] hover:bg-[#2D5A3D] text-white border-0 px-8"
            >
              Join Waitlist
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="border-[#2A3138] text-white hover:bg-[#1A1F26] bg-transparent"
              onClick={() => setIsVideoModalOpen(true)}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">
              Everything You Need for{" "}
              <span className="text-[#22C55E]">Healthy Living</span>
            </h3>
            <p className="text-xl text-[#B8C5D1] max-w-2xl mx-auto">
              Powerful features designed to make nutrition tracking effortless
              and effective.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_3fr] gap-12 items-center">
            {/* Main App Screen with Glow Effect */}
            <div className="relative">
              <div
                className="absolute inset-0 bg-[#22C55E] rounded-3xl blur-3xl opacity-20 scale-110"
                style={{ transform: `scale(${1.1 + scrollY * 0.0001})` }}
              ></div>
              <div
                className="relative bg-[#181E23]  p-4 border border-[#2A3138]"
                style={{ borderRadius: 16 }}
              >
                <Image
                  src={features[activeFeature].image || "/placeholder.svg"}
                  alt={features[activeFeature].title}
                  width={400}
                  height={800}
                  className="w-full rounded-2xl shadow-2xl transition-all duration-500"
                />
              </div>
            </div>

            {/* Feature Selection and Description */}
            <div className="space-y-8">
              {/* Feature Tabs */}
              <div className="flex flex-wrap gap-3">
                {features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-[#22C55E] text-white shadow-lg shadow-[#22C55E]/25"
                        : "bg-[#1A1F26] text-[#B8C5D1] hover:bg-[#2A3138] hover:text-white"
                    }`}
                  >
                    {feature.icon} {feature.title}
                  </button>
                ))}
              </div>

              {/* Active Feature Description */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-4">
                    {features[activeFeature].title}
                  </h4>
                  <p className="text-lg text-[#B8C5D1] leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>

                <div className="flex gap-4">
                  {/* <Button className="bg-[#22C55E] hover:bg-[#2D5A3D] text-white border-0">
                    Get Early Access
                  </Button> */}
                  <Button
                    variant="outline"
                    className="border-[#2A3138] text-white hover:bg-[#1A1F26] bg-transparent"
                    onClick={() => setIsVideoModalOpen(true)}
                  >
                    See Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started Section */}
      <section className="py-20 px-6 bg-[#1A1F26]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">
              Why We Started <span className="text-[#22C55E]">Nutrivine</span>
            </h3>
          </div>

          <div className="space-y-8 text-lg text-[#B8C5D1] leading-relaxed">
            <p>
              We believe that good nutrition shouldn't be complicated or
              overwhelming. Too many people struggle with tracking their food
              intake because existing solutions are either too complex,
              time-consuming, or simply don't provide the insights needed to
              make meaningful changes. We saw friends and family members give up
              on their health goals not because they lacked motivation, but
              because the tools available made the journey unnecessarily
              difficult.
            </p>

            <p>
              Our team of nutrition enthusiasts, data scientists, and design
              experts came together with a simple mission: to create the most
              intuitive and powerful nutrition tracking experience ever built.
              We spent countless hours researching user behavior, studying
              nutrition science, and testing different approaches to find what
              actually works in real life. Every feature in Nutrivine is
              designed around one core principle - making healthy eating feel
              natural and sustainable.
            </p>

            <p>
              Nutrivine represents our vision of the future of personal health
              technology. By combining beautiful design with intelligent
              automation and personalized insights, we're not just building
              another calorie counter - we're creating a companion that grows
              with you on your wellness journey. We believe that when technology
              gets out of the way and simply works, people can focus on what
              really matters: living healthier, happier lives.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-6 bg-[#0F1419] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#22C55E] rounded-full opacity-5 blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2D5A3D] rounded-full opacity-5 blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h3 className="text-4xl font-bold mb-6">
            Ready to <span className="text-[#22C55E]">Eat Smarter, Live Better?</span>
          </h3>
          <p className="text-xl text-[#B8C5D1] mb-8 max-w-2xl mx-auto">
            Be among the first to experience the future of nutrition tracking. Join our waitlist and get early access
            when we launch.
          </p>
          <Button
            size="lg"
            className="bg-[#22C55E] hover:bg-[#2D5A3D] text-white border-0 px-12 animate-pulse hover:animate-none"
          >
            Join the Waitlist
          </Button>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-[#2A3138] bg-[#141920] py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/nutrivine-logo.png"
                alt="Nutrivine Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-semibold text-white">
                Nutrivine
              </span>
            </div>
            <p className="text-[#B8C5D1] text-sm">
              © 2025 Nutrivine. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Updated Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#141920] rounded-2xl border border-[#2A3138] max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-[#2A3138]">
              <h3 className="text-xl font-bold text-white">Nutrivine Demo</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVideoModalOpen(false)}
                className="text-[#B8C5D1] hover:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Button>
            </div>
            <div className="p-6 text-center">
              <div className="bg-[#0F1419] rounded-lg p-12 border border-[#2A3138]">
                <div className="w-16 h-16 bg-[#2D5A3D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Demo Video Coming Soon!
                </h4>
                <p className="text-[#B8C5D1] mb-4">
                  We're currently preparing a comprehensive demo video
                  showcasing all of Nutrivine's features in action.
                </p>
                <p className="text-sm text-[#B8C5D1] opacity-75">
                  Note: The app is still in development. The demo will be for
                  demonstration purposes only and may not reflect the final
                  product.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
