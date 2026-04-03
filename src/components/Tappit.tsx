import { SectionSubTitle } from "./SectionSubTitle";

const Tappit = () => (
  <div className="max-w-5xl mx-auto space-y-6">
    <SectionSubTitle label="a. Tappit" />
    <p className="text-stone-400 text-sm">
      A UX design improvement made at Tappit — reducing friction in a core
      mobile wallet workflow.
    </p>

    <div className="bg-white border border-red-100 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center size-7 rounded-full bg-red-100 text-red-500 font-bold text-sm shrink-0">
          1
        </span>
        <div>
          <p className="text-xs font-mono text-red-400 uppercase tracking-widest">
            The Problem
          </p>
          <h3 className="text-stone-800 font-semibold text-lg leading-snug">
            Manual serial number entry
          </h3>
        </div>
      </div>

      <p className="text-stone-500 text-sm leading-relaxed mb-6">
        Customers and event staff needed to register NFC wristbands by manually
        typing a long alphanumeric serial number printed on the band into a form
        input. This was slow, error-prone and created friction at event entry
        points with high volume.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <p className="text-xs text-stone-400 font-mono uppercase tracking-widest">
            Screenshot
          </p>
          <img
            src="/tappit/before/add-wristband-manual.PNG"
            alt="Before: manual wristband serial number entry form"
            className="w-full rounded-lg border border-stone-200 object-cover"
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-stone-400 font-mono uppercase tracking-widest">
            Interaction recording
          </p>
          <video
            src="/tappit/before/add-wristband-manually.mov"
            autoPlay
            controls
            muted
            loop
            playsInline
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 1.5;
            }}
            className="w-full rounded-lg border border-stone-200"
          />
        </div>
      </div>
    </div>

    <Connector />

    {/* Phase 2 — The Solution */}
    <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center size-7 rounded-full bg-blue-100 text-blue-500 font-bold text-sm shrink-0">
          2
        </span>
        <div>
          <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">
            The Solution
          </p>
          <h3 className="text-stone-800 font-semibold text-lg leading-snug">
            MediaDevices Web API + Azure Computer Vision
          </h3>
        </div>
      </div>

      <p className="text-stone-500 text-sm leading-relaxed mb-6">
        The solution combined two technologies to replace manual entry entirely.
        The native browser{" "}
        <span className="font-medium text-stone-700">MediaDevices Web API</span>{" "}
        was accessed via Vue.js camera hooks to stream the device camera
        directly in the browser and capture a still frame. That image was then
        sent to{" "}
        <span className="font-medium text-stone-700">
          Azure Computer Vision
        </span>{" "}
        (OCR), which extracted the printed serial number and returned it as text
        — automatically populating the form input with no typing required.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-stone-50 border border-stone-100 rounded-lg p-4">
          <p className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-2">
            MediaDevices Web API + Vue.js
          </p>
          <ul className="space-y-1.5">
            {[
              "getUserMedia() streams the device camera in-browser",
              "Vue composable encapsulates camera lifecycle and teardown",
              "Canvas captures a still frame as a Blob for upload",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-stone-500 text-xs"
              >
                <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-stone-50 border border-stone-100 rounded-lg p-4">
          <p className="text-xs font-mono text-blue-500 uppercase tracking-widest mb-2">
            Azure Computer Vision (OCR)
          </p>
          <ul className="space-y-1.5">
            {[
              "Receives the image and runs optical character recognition",
              "Identifies and extracts the alphanumeric serial number",
              "Validates serial number and checks for duplicates in the database",
              "Returns serial number used to auto-fill the form",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-stone-500 text-xs"
              >
                <span className="text-blue-400 mt-0.5 shrink-0">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-6 border-t border-stone-100 mt-6">
        {[
          "Vue.js",
          "MediaDevices API",
          "Azure Computer Vision",
          "OCR",
          ".NET 8",
        ].map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-blue-500 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    <Connector />

    {/* Phase 3 — The Output */}
    <div className="bg-white border border-green-100 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex items-center justify-center size-7 rounded-full bg-green-100 text-green-500 font-bold text-sm shrink-0">
          3
        </span>
        <div>
          <p className="text-xs font-mono text-green-400 uppercase tracking-widest">
            The Output
          </p>
          <h3 className="text-stone-800 font-semibold text-lg leading-snug">
            Camera-based serial number capture
          </h3>
        </div>
      </div>

      <p className="text-stone-500 text-sm leading-relaxed mb-6">
        Added the ability to take a photo of the wristband serial number
        directly within the app. The image is processed to extract the serial
        and automatically populate the form input — eliminating manual entry
        entirely, reducing errors and speeding up the registration flow.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <p className="text-xs text-stone-400 font-mono uppercase tracking-widest">
            Interaction recording
          </p>
          <video
            src="/tappit/after/add-wristband.mov"
            autoPlay
            controls
            muted
            loop
            playsInline
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 1.5;
            }}
            className="w-full rounded-lg border border-stone-200"
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-stone-400 font-mono uppercase tracking-widest">
            After — form auto-filled
          </p>
          <img
            src="/tappit/after/add-wristband.PNG"
            alt="After: wristband form auto-filled from photo"
            className="w-full rounded-lg border border-stone-200 object-cover"
          />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-stone-400 font-mono uppercase tracking-widest">
            Wristbands view
          </p>
          <img
            src="/tappit/after/wristbands.PNG"
            alt="After: wristbands management view"
            className="w-full rounded-lg border border-stone-200 object-cover"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-6 border-t border-stone-100 mt-6">
        {["Vue.js", "UX Design", "Mobile", "Fintech"].map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-green-600 bg-green-50 border border-green-100 px-2 py-0.5 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Connector = () => (
  <div className="flex flex-col items-center py-6 gap-1">
    <div className="w-px h-8 bg-stone-200" />
    <svg
      className="w-5 h-5 text-blue-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
    <div className="w-px h-4 bg-stone-200 mt-1" />
  </div>
);

export default Tappit;
