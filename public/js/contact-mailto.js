document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const recipient = "kizilenis@live.de";

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const subjectRaw = form.elements["subject"].value.trim();
    const message = form.elements["message"].value.trim();

    const subject = subjectRaw || "Contact Request: Homepage";

    const body =
`Name/Company: ${name}
E-Mail: ${email}

Message:
${message}
`;

    const mailto =
      `mailto:${encodeURIComponent(recipient)}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Öffnet das lokale Mailprogramm
    window.location.href = mailto;
  });
});
