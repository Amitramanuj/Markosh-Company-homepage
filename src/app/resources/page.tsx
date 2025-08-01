import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { FileText, BookOpen, Newspaper } from "lucide-react"

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-secondary">
        <div className="container mx-auto text-center py-16">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">Resources</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our insights, research, and success stories.
          </p>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <Tabs defaultValue="case-studies" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="white-papers">White Papers</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
            </TabsList>
            <TabsContent value="case-studies">
              <Card className="mt-6">
                <CardHeader>
                  <FileText className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Case Studies</CardTitle>
                  <CardDescription>Real-world examples of how we've helped our clients succeed.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our case studies are coming soon. Check back later to see our success stories.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="white-papers">
              <Card className="mt-6">
                <CardHeader>
                  <BookOpen className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>White Papers</CardTitle>
                  <CardDescription>In-depth reports on industry trends and technologies.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">We are currently preparing insightful white papers for you. Stay tuned.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="blog">
              <Card className="mt-6">
                <CardHeader>
                  <Newspaper className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Blog</CardTitle>
                  <CardDescription>Articles on software development, IT staffing, and business growth.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Our blog is launching soon. Get ready for expert articles and tips.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}
