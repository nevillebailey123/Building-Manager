(function () {
  "use strict";

  const SUPABASE_URL = "https://utpfgldgiohbtvuaygkq.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_WI6VsYzn6SL7zSbrDZGM9g_qav2A0ZF";

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    console.error("Compliance HQ: Supabase library is unavailable.");
    return;
  }

  const client = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  async function signIn(email, password) {
    const result = await client.auth.signInWithPassword({
      email: String(email || "").trim(),
      password: String(password || ""),
    });

    if (result.error) {
      throw result.error;
    }

    return result.data;
  }

  async function signOut() {
    const result = await client.auth.signOut();

    if (result.error) {
      throw result.error;
    }

    return true;
  }

  async function getSession() {
    const result = await client.auth.getSession();

    if (result.error) {
      throw result.error;
    }

    return result.data.session || null;
  }

  async function testConnection() {
    const session = await getSession();

    if (!session) {
      return {
        success: false,
        authenticated: false,
        message: "Not signed in.",
      };
    }

    const result = await client
      .from("properties")
      .select("id")
      .limit(1);

    if (result.error) {
      return {
        success: false,
        authenticated: true,
        message: result.error.message,
      };
    }

    return {
      success: true,
      authenticated: true,
      message: "Supabase connection successful.",
    };
  }

  window.ComplianceHQSupabase = {
    client,
    signIn,
    signOut,
    getSession,
    testConnection,
  };
})();
