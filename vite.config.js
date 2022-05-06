import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    target: "esnext",
    manifest: true,
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL("./index.html", import.meta.url)),
        members: fileURLToPath(new URL("./members.html", import.meta.url)),
        research_activity_sugimura: fileURLToPath(
          new URL("./research_activity_sugimura.html", import.meta.url)
        ),
        research_activity_umemura: fileURLToPath(
          new URL("./research_activity_umemura.html", import.meta.url)
        ),
        research_activity_students: fileURLToPath(
          new URL("./research_activity_students.html", import.meta.url)
        ),
        annual_schedule: fileURLToPath(
          new URL("./annual_schedule.html", import.meta.url)
        ),
      },
    },
  },
});
