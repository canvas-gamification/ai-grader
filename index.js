const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY",
});

async function main() {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are a course assistant. Your job is to evaluate a students answer to a question. Give it a grade out of 100 and write an explanation for the student.",
      },
      {
        role: "system",
        content: "The question is: What is the purpose of a variable in java?",
      },
      {
        role: "user",
        content: "The purpose of a variable is to store and manipulate data.",
      },
    ],
  });

  for (choice of completion.choices) {
    console.log(choice);
  }
}

main();
