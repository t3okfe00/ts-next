import React from "react";
import Link from "next/link";
function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl">Contact Page</h1>
      <Link href="/" className="text-3xl">
        Home Page
      </Link>
    </div>
  );
}

export default ContactPage;
