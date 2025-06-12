import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is SnuSpace?",
    answer:
      "SnuSpace is a student-led platform that provides access to past year papers, course materials, and other academic resources for students at Shiv Nadar University. Our goal is to help students prepare better for their examinations by providing easy access to relevant study materials.",
  },
  {
    question: "How can I access past year papers?",
    answer:
      "You can access past year papers by navigating to the Departments section, selecting your department, then your course, and finally the academic year you're interested in. All papers are available for download in PDF format.",
  },
  {
    question: "Are all departments covered on SnuSpace?",
    answer:
      "We are continuously expanding our collection to cover all departments at SNU. Currently, we have resources for Computer Science, Electronics, International Relations, Civil Engineering, Mechanical Engineering, and Business Management Studies. If your department isn't listed, please let us know through the Contact page.",
  },
  {
    question: "How can I contribute to SnuSpace?",
    answer:
      "You can contribute by sharing past year papers, notes, or other academic resources that you have. Simply use the Contribute button in the navigation bar, fill out the form, and upload your files. All contributions are reviewed before being added to the platform.",
  },
  {
    question: "Is SnuSpace officially affiliated with Shiv Nadar University?",
    answer:
      "SnuSpace is a student-led initiative and is not officially affiliated with Shiv Nadar University. However, we work in accordance with the university's academic policies and respect copyright regulations.",
  },
  {
    question: "Are the materials on SnuSpace verified?",
    answer:
      "Yes, all materials uploaded to SnuSpace are reviewed by our team to ensure they are accurate, relevant, and free from copyright issues. However, we recommend using these materials as supplements to your regular course materials and not as replacements.",
  },
]

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">Find answers to common questions about SnuSpace.</p>
          <div className="mt-8 rounded-lg overflow-hidden max-w-3xl mx-auto">
           
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 bg-muted rounded-lg text-center">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-muted-foreground mb-4">
            If you couldn't find the answer to your question, feel free to contact us.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}