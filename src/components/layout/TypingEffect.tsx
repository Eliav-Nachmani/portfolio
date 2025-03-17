"use client";

import { useState, useEffect } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  text,
  speed = 50,
  delay = 0,
  className = "",
  onComplete,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [typingIndex, setTypingIndex] = useState(-1); // Start at -1 to handle delay
  const [isTyping, setIsTyping] = useState(true);
  const sessionKey = `typed-${text}`; // Unique key for each text instance

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (typeof window !== "undefined") {
      const hasTyped = sessionStorage.getItem(sessionKey);

      // ✅ If already typed this session, show full text instantly
      if (hasTyped) {
        setDisplayText(text);
        setIsTyping(false);
        if (onComplete) onComplete();
        return;
      }
    }

    if (typingIndex === -1) {
      // ⏳ Apply delay before typing starts
      timeout = setTimeout(() => setTypingIndex(0), delay);
    } else if (typingIndex < text.length) {
      let nextSpeed = speed * (0.6 + Math.random() * 0.6);

      if (Math.random() > 0.75 && text[typingIndex] === " ") {
        nextSpeed *= 5.5; // Longer pause after some words
      }

      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[typingIndex]);
        setTypingIndex(typingIndex + 1);
      }, nextSpeed);
    } else {
      setIsTyping(false);
      if (onComplete) onComplete();

      // ✅ Store in sessionStorage so animation doesn’t repeat in the same session
      if (typeof window !== "undefined") {
        sessionStorage.setItem(sessionKey, "true");
      }
    }

    return () => clearTimeout(timeout);
  }, [typingIndex, text, speed, delay, onComplete, sessionKey]);

  return (
    <span className={`whitespace-pre-wrap ${className}`}>
      {displayText}
      <span className={`inline-block w-2 h-4 bg-white ${isTyping ? "animate-blink" : "opacity-0"}`}></span>
    </span>
  );
};

export default TypingEffect;
