function findAI() {
    // 1. Get the user's input and convert to lowercase
    const input = document.getElementById("userInput").value.toLowerCase();
    const resultDiv = document.getElementById("result");
    
    // 2. Define our logic (The "Brain")
    let recommendation = "";
    let reason = "";

    // Check for "Coding" keywords
    if (input.includes("code") || input.includes("program") || input.includes("python") || input.includes("script") || input.includes("bug")) {
        recommendation = "Claude 3.5 Sonnet or GitHub Copilot";
        reason = "These are currently the top-rated AIs for generating clean, working code.";
    } 
    // Check for "Image/Art" keywords
    else if (input.includes("image") || input.includes("draw") || input.includes("logo") || input.includes("picture") || input.includes("art")) {
        recommendation = "Midjourney or DALL-E 3";
        reason = "Midjourney is best for artistic style, while DALL-E 3 follows instructions very precisely.";
    }
    // Check for "Writing" keywords
    else if (input.includes("write") || input.includes("essay") || input.includes("email") || input.includes("blog") || input.includes("summary")) {
        recommendation = "ChatGPT (GPT-4) or Claude 3 Opus";
        reason = "These models have the best nuance and creativity for long-form writing.";
    }
    // Check for "Data/Math" keywords
    else if (input.includes("data") || input.includes("analyze") || input.includes("math") || input.includes("spreadsheet")) {
        recommendation = "ChatGPT (with Data Analyst) or Julius AI";
        reason = "ChatGPT allows you to upload Excel files directly for analysis.";
    }
    // Default fallback
    else {
        recommendation = "ChatGPT";
        reason = "It is the best all-rounder for general tasks.";
    }

    // 3. Display the result
    resultDiv.innerHTML = `
        <div style="background: #eef; padding: 15px; border-radius: 8px;">
            <p>🤖 I recommend: <strong>${recommendation}</strong></p>
            <p style="font-size: 0.9rem; color: #555;">${reason}</p>
        </div>
    `;
}
