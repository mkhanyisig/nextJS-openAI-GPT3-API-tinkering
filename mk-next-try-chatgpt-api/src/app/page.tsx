"use client";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
        <p> Hello Mkhanyisi </p>

        <button 
          onClick={async () => {
            const response = await  fetch ("/api/chat-gpt", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                someData: true
              }),
            });
            console.log("chat gpt response: ", response);
          }}
        >Hit Chat GPT API</button>
    </main>
  );
}
