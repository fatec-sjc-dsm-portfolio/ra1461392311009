import React from 'react';
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiDocker,
  SiGit,
  SiGithub,
  SiGooglecloud,
  SiGnubash,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiSpringboot,
  SiSequelize,
  SiHtml5,
  SiCss,
  SiReact,
  SiArduino
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { DiScrum } from 'react-icons/di';
import { Database, Code2 } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
  showColor?: boolean;
}

export default function TechIcon({ name, className = "w-5 h-5", showColor = true }: TechIconProps) {
  const normalized = name.toLowerCase().trim();

  // Python
  if (normalized.includes('python')) {
    return <SiPython className={className} style={showColor ? { color: '#3776AB' } : undefined} />;
  }

  // TypeScript
  if (normalized.includes('typescript')) {
    return <SiTypescript className={className} style={showColor ? { color: '#3178C6' } : undefined} />;
  }

  // JavaScript
  if (normalized.includes('javascript')) {
    return <SiJavascript className={className} style={showColor ? { color: '#F7DF1E' } : undefined} />;
  }

  // Java
  if (normalized === 'java' || normalized.includes('java ') || normalized.startsWith('java')) {
    return <FaJava className={className} style={showColor ? { color: '#ED8B00' } : undefined} />;
  }

  // Shell Script / Bash
  if (normalized.includes('shell') || normalized.includes('bash')) {
    return <SiGnubash className={className} style={showColor ? { color: '#4EAA25' } : undefined} />;
  }

  // HTML
  if (normalized.includes('html')) {
    return <SiHtml5 className={className} style={showColor ? { color: '#E34F26' } : undefined} />;
  }

  // CSS
  if (normalized.includes('css')) {
    return <SiCss className={className} style={showColor ? { color: '#1572B6' } : undefined} />;
  }

  // Node.js
  if (normalized.includes('node')) {
    return <SiNodedotjs className={className} style={showColor ? { color: '#5FA04E' } : undefined} />;
  }

  // Express
  if (normalized.includes('express')) {
    return <SiExpress className={className} />;
  }

  // Flask
  if (normalized.includes('flask')) {
    return <SiFlask className={className} />;
  }

  // Spring Boot
  if (normalized.includes('spring')) {
    return <SiSpringboot className={className} style={showColor ? { color: '#6DB33F' } : undefined} />;
  }

  // Sequelize
  if (normalized.includes('sequelize')) {
    return <SiSequelize className={className} style={showColor ? { color: '#52B0E7' } : undefined} />;
  }

  // React
  if (normalized.includes('react')) {
    return <SiReact className={className} style={showColor ? { color: '#61DAFB' } : undefined} />;
  }

  // MySQL
  if (normalized.includes('mysql')) {
    return <SiMysql className={className} style={showColor ? { color: '#4479A1' } : undefined} />;
  }

  // MongoDB / NoSQL
  if (normalized.includes('mongo') || normalized.includes('nosql')) {
    return <SiMongodb className={className} style={showColor ? { color: '#47A248' } : undefined} />;
  }

  // PostgreSQL
  if (normalized.includes('postgres')) {
    return <SiPostgresql className={className} style={showColor ? { color: '#4169E1' } : undefined} />;
  }

  // SQLite
  if (normalized.includes('sqlite')) {
    return <SiSqlite className={className} style={showColor ? { color: '#003B57' } : undefined} />;
  }

  // Google Cloud Platform
  if (normalized.includes('google cloud') || normalized.includes('gcp') || normalized.includes('cloud')) {
    return <SiGooglecloud className={className} style={showColor ? { color: '#4285F4' } : undefined} />;
  }

  // Docker
  if (normalized.includes('docker')) {
    return <SiDocker className={className} style={showColor ? { color: '#2496ED' } : undefined} />;
  }

  // Git
  if (normalized === 'git') {
    return <SiGit className={className} style={showColor ? { color: '#F05032' } : undefined} />;
  }

  // GitHub
  if (normalized.includes('github')) {
    return <SiGithub className={className} />;
  }

  // Scrum
  if (normalized.includes('scrum')) {
    return <DiScrum className={className} style={showColor ? { color: '#0284C7' } : undefined} />;
  }

  // Arduino / IoT
  if (normalized.includes('arduino') || normalized.includes('iot')) {
    return <SiArduino className={className} style={showColor ? { color: '#00979D' } : undefined} />;
  }

  // SQL genérico
  if (normalized.includes('sql')) {
    return <Database className={className} style={showColor ? { color: '#0284C7' } : undefined} />;
  }

  return <Code2 className={className} />;
}
