// App.tsx
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const App = () => {
  const [markdown, setMarkdown] = useState(
    `Hi Daniella,

I’m excited to be your partner and support you! 🐯🚀

I’ll assist you ensuring that **Novo Nordisk** stays **financially compliant** while helping **your manager** track departmental spending.

At the **end of each month**, I’ll ask if you’ve **received** any goods or services from your **Purchase Orders scheduled for delivery**.

Please confirm **only** the services or goods that **have already been received** or those that you are **certain** will be **received** by the **end of the current month**. If you don’t have any relevant Purchase Orders, that’s fine – I won’t write you! 😉

I kindly ask you to **reply promptly** so I can **finalise reporting by month-end**.

Are you ready to get started? 😍

If you have any questions, feel free to type them in the chat.

Thank you for your cooperation, and I look forward to connecting with you regularly! 😁`
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col md:flex-row gap-6">
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        className="w-full md:w-1/2 h-screen p-4 border border-gray-300 rounded-lg resize-none font-mono text-sm"
        placeholder="Enter Markdown..."
      />

      <div className="w-full md:w-1/2 h-screen p-4 bg-white border border-gray-300 rounded-lg overflow-auto prose prose-slate">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default App;
