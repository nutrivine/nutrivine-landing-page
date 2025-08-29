import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0F1419] text-white">
      {/* Header */}
      <header className="border-b border-[#2A3138] bg-[#141920]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/ios_dark_1024.png"
              alt="Nutrivine Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h1 className="text-2xl font-bold text-white">Nutrivine</h1>
          </div>
          <Button className="bg-[#2D5A3D] hover:bg-[#22C55E] text-white border-0">
            Download App
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-[#2D5A3D] text-white hover:bg-[#2D5A3D]">
            Smart Nutrition Tracking
          </Badge>
          <h2 className="text-5xl font-bold mb-6 text-balance">
            Track Your Nutrition Journey with{" "}
            <span className="text-[#22C55E]">Intelligence</span>
          </h2>
          <p className="text-xl text-[#B8C5D1] mb-8 max-w-2xl mx-auto text-pretty">
            Transform your health with AI-powered nutrition tracking,
            personalized insights, and seamless meal logging.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-[#22C55E] hover:bg-[#2D5A3D] text-white border-0 px-8"
            >
              Get Started Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#2A3138] text-white hover:bg-[#1A1F26] bg-transparent"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute inset-0 bg-[#22C55E] rounded-3xl blur-2xl opacity-20"></div>
            <Image
              src="/app-screenshot-1.jpg"
              alt="Nutrivine App Screenshot"
              width={400}
              height={800}
              className="relative rounded-3xl shadow-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-[#141920] border-[#2A3138] p-8 hover:border-[#2D5A3D] transition-colors">
              <div className="w-12 h-12 bg-[#2D5A3D] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Smart Food Tracking
              </h4>
              <p className="text-[#B8C5D1]">
                Effortlessly log meals with our intelligent food database and
                barcode scanning technology.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-[#141920] border-[#2A3138] p-8 hover:border-[#2D5A3D] transition-colors">
              <div className="w-12 h-12 bg-[#2D5A3D] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Personalized Insights
              </h4>
              <p className="text-[#B8C5D1]">
                Get AI-powered recommendations tailored to your dietary goals
                and nutritional needs.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-[#141920] border-[#2A3138] p-8 hover:border-[#2D5A3D] transition-colors">
              <div className="w-12 h-12 bg-[#2D5A3D] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Goal Achievement
              </h4>
              <p className="text-[#B8C5D1]">
                Set and track your nutrition goals with visual progress
                indicators and milestone celebrations.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="bg-[#141920] border-[#2A3138] p-8 hover:border-[#2D5A3D] transition-colors">
              <div className="w-12 h-12 bg-[#2D5A3D] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Activity Integration
              </h4>
              <p className="text-[#B8C5D1]">
                Seamlessly track both nutrition and physical activity to get a
                complete health picture.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="bg-[#141920] border-[#2A3138] p-8 hover:border-[#2D5A3D] transition-colors md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-[#2D5A3D] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                Progress Analytics
              </h4>
              <p className="text-[#B8C5D1]">
                Visualize your nutrition journey with detailed charts and
                comprehensive health analytics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1A1F26]">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Transform Your{" "}
            <span className="text-[#22C55E]">Nutrition Journey?</span>
          </h3>
          <p className="text-xl text-[#B8C5D1] mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already improved their health with
            {"Nutrivine's intelligent tracking."}
          </p>
          <Button
            size="lg"
            className="bg-[#22C55E] hover:bg-[#2D5A3D] text-white border-0 px-12"
          >
            Download Nutrivine Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2A3138] bg-[#141920] py-8 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/ios_dark_1024.png"
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
    </div>
  );
}
