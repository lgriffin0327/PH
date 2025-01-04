export default function FAQ() {
  const faqs = [
    { 
      question: "What can I expect from therapy?",
      answer: "In therapy, you can expect a safe, confidential space to explore your thoughts, feelings, and challenges. Our Christian counselors will guide you through a process of self-discovery, healing, and growth, integrating faith-based principles with evidence-based therapeutic techniques."
    },
    { 
      question: "How do I get started?",
      answer: "Getting started is easy. Simply click the 'Get Started' button, fill out a brief questionnaire about your needs and preferences, and we'll match you with a suitable Christian therapist. You can then schedule your first session at a time that works for you."
    },
    { 
      question: "Is Pastor's Heart right for me?",
      answer: "Pastor's Heart is ideal for individuals, couples, and teens seeking Christian-based counseling. If you're looking for support with issues like anxiety, depression, relationship problems, or spiritual growth, and want to integrate your faith into the healing process, our services could be a great fit for you."
    },
    { 
      question: "How much does it cost?",
      answer: "Our pricing varies depending on the type and frequency of sessions. We offer flexible plans to suit different needs and budgets. Financial aid is also available for those who qualify. For specific pricing information, please visit our pricing page or contact our support team."
    },
    { 
      question: "What if I don't like my therapist?",
      answer: "Your comfort and connection with your therapist are crucial for effective therapy. If you feel your current therapist isn't the right fit, you can easily request a change at any time. We'll work with you to find a counselor who better meets your needs and preferences."
    },
    { 
      question: "Can I use insurance?",
      answer: "While we don't work directly with insurance companies, we can provide you with a superbill that you can submit to your insurance for potential reimbursement. We recommend checking with your insurance provider about their policies for online therapy reimbursement."
    },
    { 
      question: "How long are the sessions?",
      answer: "Our standard video or phone sessions are 50 minutes long. However, we also offer longer sessions and flexible options like messaging therapy. The duration and frequency of your sessions can be tailored to your specific needs and schedule."
    },
    { 
      question: "Is Pastor's Heart HIPAA compliant?",
      answer: "Yes, Pastor's Heart is fully HIPAA compliant. We take your privacy and the security of your information very seriously. Our platform uses bank-grade encryption to ensure that all your communications and personal information are kept confidential and secure."
    }
  ]

  return (
    <section className="w-full py-16 bg-[#F7F9F9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#2C3E50]">Frequently asked questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-[#2C3E50]">{faq.question}</h3>
              <p className="text-[#2C3E50]">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#2C3E50] text-[#F7F9F9] px-6 py-2 rounded-full hover:bg-[#B1A976] transition-colors">See more FAQs</button>
        </div>
      </div>
    </section>
  )
}
