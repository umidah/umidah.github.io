/**
 * Extension Configuration
 */
export const EXTENSION_CONFIG = [
  {
    // name: (text) - Must be identical with folder name
    NAME: "template",
    // description: (text) - Not really needed in functionality, but just in case
    DESCRIPTION: `sample description`,
    // enabled: (true / false) - Enable or Disable Extension
    ENABLED: false,
  },
  {
    NAME: "equalizer",
    DESCRIPTION: `equalizer panel for modernGraphTool`,
    ENABLED: true,
    I18N_ENABLED: true, // This enables modernGraphTool's core to manage equalizer extension's language strings.
    CONFIG: {
      INITIAL_EQ_BANDS: 5, // Number of Equalizer Bands at start
      MAXIMUM_EQ_BANDS: 20, // Maximum Number of Equalizer Bands
    },
  },
  {
    NAME: "device-peq",
    DESCRIPTION: `modernGraphTool-compatible wrapper for devicePEQ project by jeromeof (tested with v0.8)`,
    ENABLED: true,
    CONFIG: {
      ADVANCED: false, // Allow users to manipulate advanced dialogs (might be dangerous)
      SHOW_LOGS: false, // Show logs in console
    }
  },
  {
    NAME: "frequency-tutorial",
    DESCRIPTION: `frequency tutorial for modernGraphTool`,
    ENABLED: true,
    CONFIG: {
      USE_ENGLISH_ONLY: false,
    },
  },
  {
    NAME: "target-customizer",
    DESCRIPTION: `target customization feature set for modernGraphTool`,
    ENABLED: true,
    I18N_ENABLED: true,
    CONFIG: {
      FILTERS: [
        { id: "tilt", name: "Tilt", description: "Filter for adjusting the overall tonal balance",
          type: "TILT", freq: 0, q: 0 },
        { id: "bass", name: "Bass", description: "Filter for adjusting low frequencies",
          type: "LSQ", freq: 105, q: 0.707 },
        { id: "treble", name: "Treble", description: "Filter for adjusting high frequencies",
          type: "HSQ", freq: 2500, q: 0.42 },
        { id: "ear", name: "Ear", description: "Filter for adjusting ear gain",
          type: "PK", freq: 2750, q: 1 },
        { id: "pssr", name: "PSSR", description: "Predicted Steady State Response",
          type: "HSQ", freq: 500, q: 0.4 },
      ],
      // Targets that can be customized
      CUSTOMIZABLE_TARGETS: [ "KEMAR DF (KB006x)", "ISO 11904-2 DF" ],
      // Filter Preset
      FILTER_PRESET: [
        { name: 'Harman 2013', filter: { bass: 6.6, treble: -1.4 }},
        { name: 'Harman 2015', filter: { bass: 6.6, treble: -3, ear: -1.8 }},
        { name: 'Harman 2018', filter: { bass: 4.8, treble: -4.4 }},
      ],
      // Applies custom filter to the specified target on initial load
      INITIAL_TARGET_FILTERS: [
        { name: "KEMAR DF (KB006x)", filter: { tilt: -0.8, bass: 6 }},
        { name: "ISO 11904-2 DF", filter: { tilt: -0.8, bass: 6 }},
      ]
    }
  },
  {
    NAME: "graph-color-wheel",
    DESCRIPTION: `Graph customizer for modernGraphTool with color wheel and dash customizer`,
    ENABLED: true,
    I18N_ENABLED: true,
  },
  {
    NAME: "preference-bound",
    DESCRIPTION: `preference bound overlay for modernGraphTool`,
    ENABLED: true,
    I18N_ENABLED: true,
    CONFIG: {
      // Preference Bound requires a file containing bound data.
      // This file must be inside /extensions/preference-bound/data/.
      // When 'BOUND_DATA_FILE' is set to 'Bounds', it will look for the file 'Bounds U.txt' and 'Bounds D.txt'
      // ... where 'U' and 'D' stand for Upper and Lower Bound respectively.
      BOUND_DATA_FILE: "Bounds", 
      // Preference Bound requires base Diffuse Target to be drawn upon.
      // Since original concept of Preference Bound was made upon 5128 DF targets,
      // ... it's generally recommended to use Diffuse Field Targets as baseline,
      // ... or custom 'Delta' 5128-DF Target for IEC 60318-4 if you have one. 
      BASE_DF_TARGET_FILE: "KEMAR DF (KB006x) Target", // needs to be inside /extensions/preference-bound/data/
      // Other configs
      ENABLE_BOUND_ON_INITIAL_LOAD: true,
      COLOR_FILL: "rgba(180, 180, 180, 0.2)",
      COLOR_BORDER: "rgba(120, 120, 120, 0.2)",
    }
  },
  {
    NAME: "squiglink-integration",
    DESCRIPTION: `squig.link integration for modernGraphTool`,
    ENABLED: false,
    CONFIG: {
      // Set these variables to your own GTM ID and site name
      ANALYTICS_SITE: "",       // Site name for attributing analytics events to your site
      ANALYTICS_GTM_ID: "",     // GTM ID used for analytics. If you don't already have one, you'll need to create a Google Tag Manager account
      LOG_ANALYTICS: true,      // If true, events are logged in console
      ENABLE_ANALYTICS: true,   // If true, analytic features are enabled
    },
  },
];
