import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import '../src/style.css';
import { NavBar , AllPosts, SinglePost } from "./Components";
const appElement = document.getElementById("app");
const root = createRoot(appElement)

