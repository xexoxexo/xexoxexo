document.addEventListener('DOMContentLoaded', (event) => {
  const commandInput = document.getElementById('command-input');
  const terminalOutput = document.getElementById('terminal-output');

  commandInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const command = this.value;
      terminalOutput.innerHTML += `<div><span class="prompt">visitor@IzakiOS:~$</span> ${command}</div>`;
      
      // Add your command logic here
      if (command.toLowerCase() === 'help') {
        terminalOutput.innerHTML += `
          <div>Available commands:</div>
          <div>- help: Display this help message</div>
          <div>- about: Display information about Izaki</div>
          <div>- skills: List Izaki's skills</div>
          <div>- contact: Show contact information</div>
          <div>- achievements: Display unlocked achievements</div>
          <div>- level: Show current level and XP</div>
          <div>- quest: Display current quest</div>
          <div>- clear: Clear the terminal</div>
        `;
      } else if (command.toLowerCase() === 'about') {
        terminalOutput.innerHTML += `
          <div>Zaky Arman Maulana is a 20-year-old tech enthusiast passionate about open source and development.</div>
          <div>From DevOps to Blockchain, he loves diving into new challenges and crafting innovative solutions.</div>
        `;
      } else if (command.toLowerCase() === 'skills') {
        terminalOutput.innerHTML += `
          <div>Rudransh's skills include:</div>
          <div>- Languages: Rust, C, Go, Solidity, TypeScript, JavaScript, flutter, kotlin, python, blade, php </div>
          <div>- Tools: Git, Docker, Vim, Notion, Bun, AWS, Canva, Framer, Figma, </div>
          <div>- Web Technologies: Next.js, React, Laravel, WebAssembly</div>
        `;
      } else if (command.toLowerCase() === 'contact') {
        terminalOutput.innerHTML += `
          <div>Contact Izaki:</div>
          <div>- Email: izakiarmnn@gmail.com</div>
          <div>- LinkedIn: https://www.linkedin.com/in/zakyarmanmaulana-109a5v97s//</div>
          <div>- Twitter: https://twitter.com/izakivengeance</div>
          <div>- GitHub: https://github.com/xexoxexo</div>
        `;
      } else if (command.toLowerCase() === 'clear') {
        terminalOutput.innerHTML = '';
      } else {
        terminalOutput.innerHTML += `<div>Command not found: ${command}</div>`;
      }

      this.value = '';
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  });
});

