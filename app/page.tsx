import Header from "@/components/Header"
import ChatInterface from "@/components/ChatInterface"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ChatInterface />
      </main>
    </>
  )
}

