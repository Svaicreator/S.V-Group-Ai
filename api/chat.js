SV-Agent-6392
│
├── index.html
│
└── api
     │
     └── chat.js export default async function handler(req, res) {

const response = await fetch("https://api.openai.com/v1/chat/completions", {

method: "POST",

headers: {
"Content-Type": "application/json",
"Authorization": "Bearer " + process.env.OPENAI_API_KEY
},

body: JSON.stringify({
model: "gpt-4o-mini",
messages: [
{ role: "system", content: "You are a helpful AI assistant" },
{ role: "user", content: req.body.prompt }
]
})

});

const data = await response.json();

res.status(200).json(data);

}
