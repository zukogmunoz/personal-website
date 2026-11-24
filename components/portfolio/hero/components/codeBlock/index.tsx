"use client";

import React from "react";
import { CodeBlockProps } from "./types";

/**
 * @description
 * @component HeroCodeBlock
 * @param {CodeBlockProps} props - Code block props
 * @returns {JSX.Element}
 */
export function HeroCodeBlock({ data, comment }: CodeBlockProps) {
  const { developer } = data;

  return (
    <div className="relative">
      <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-4 text-xs text-muted-foreground font-mono">
            zukog-profile.ts
          </span>
        </div>
        <pre className="p-6 text-sm font-mono overflow-x-auto">
          <code>
            <span className="text-muted-foreground">{comment}</span>
            {"\n"}
            <span className="text-primary">const</span>{" "}
            <span className="text-foreground">developer</span>{" "}
            <span className="text-muted-foreground">=</span>{" "}
            <span className="text-primary">{"{"}</span>
            {"\n  "}
            <span className="text-foreground">name</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-green-400">{`"${developer.name}"`}</span>
            <span className="text-muted-foreground">,</span>
            {"\n  "}
            <span className="text-foreground">role</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-green-400">{`"${developer.role}"`}</span>
            <span className="text-muted-foreground">,</span>
            {"\n  "}
            <span className="text-foreground">experience</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-orange-400">{developer.experience}</span>
            <span className="text-muted-foreground">,</span>
            {"\n  "}
            <span className="text-foreground">stack</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-primary">{"["}</span>
            {developer.stack.map((tech, index) => (
              <React.Fragment key={tech}>
                {"\n    "}
                <span className="text-green-400">{`"${tech}"`}</span>
                {index < developer.stack.length - 1 && (
                  <span className="text-muted-foreground">,</span>
                )}
              </React.Fragment>
            ))}
            {"\n  "}
            <span className="text-primary">{"]"}</span>
            <span className="text-muted-foreground">,</span>
            {"\n  "}
            <span className="text-foreground">available</span>
            <span className="text-muted-foreground">:</span>{" "}
            <span className="text-primary">{developer.available.toString()}</span>
            {"\n"}
            <span className="text-primary">{"}"}</span>
            <span className="text-muted-foreground">;</span>
          </code>
        </pre>
      </div>
    </div>
  );
}