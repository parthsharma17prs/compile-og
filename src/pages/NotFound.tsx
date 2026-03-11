import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Home, ArrowLeft, ShieldAlert } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)]" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />
              <h1 className="relative text-[10rem] md:text-[15rem] font-black uppercase tracking-tighter leading-none opacity-20">
                404
              </h1>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 text-red-500 font-black uppercase tracking-widest text-xs mb-4">
                <ShieldAlert size={14} />
                <span>Route Integrity Error</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Verification Failed.
              </h2>
              <p className="text-xl text-muted-foreground font-medium max-w-md mx-auto">
                Evidence suggests this path does not exist in our institutional ledger.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link to="/">
                <Button size="lg" className="h-14 px-8 bg-red-500 hover:bg-red-600 text-white rounded-2xl shadow-xl font-bold uppercase tracking-widest text-xs">
                  <Home className="mr-2 h-4 w-4" />
                  Return to Origin
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-14 px-8 border-2 rounded-2xl font-bold uppercase tracking-widest text-xs" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Reverse Drift
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
