import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { OAuthPanel } from "@/components/account/oauth-panel";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export default function LoginPage() {
  return (
    <main>
      <HeroHighlight containerClassName="h-auto bg-transparent" className="w-full">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start">
            <div className="lg:pt-6">
              <PageHeader
                title="Welcome back"
                description="Discord OAuth2 is enabled. Roblox OAuth2 is prepared, but disabled for now."
              />

              <div className="mt-6 space-y-4 text-sm text-zinc-600 dark:text-zinc-400">
                <p>
                  Sign in to track orders, manage credits, and unlock seller tools.
                </p>
                <p>
                  <span className="font-medium text-zinc-950 dark:text-zinc-50">
                    No passwords.
                  </span>{" "}
                  OAuth only.
                </p>
                <p>
                  Selling is gated behind <Highlight>admin verification</Highlight>.
                </p>
              </div>
            </div>

            <div className="lg:pt-2">
              <OAuthPanel />
            </div>
          </div>
        </Container>
      </HeroHighlight>
    </main>
  );
}
