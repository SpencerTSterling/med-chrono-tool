document.getElementById("generate").addEventListener("click", () => {
    function getEntry(label, inputId, maxId, placeholderMax, painId, tendernessId, stiffnessId) {
      const value = document.getElementById(inputId).value;
      const maxInput = document.getElementById(maxId).value;
      const max = maxInput ? maxInput : placeholderMax; // fallback to placeholder
  
      if (!value) return null; // skip if no measurement entered
  
      let findings = [];
      if (document.getElementById(painId).checked) findings.push("pain");
      if (document.getElementById(tendernessId).checked) findings.push("tenderness");
      if (document.getElementById(stiffnessId).checked) findings.push("stiffness");
  
      let entry = `${label.toLowerCase()} was ${value}/${max}`;
      if (findings.length > 0) {
        entry += " with " + findings.join(" and ");
      }
      return entry;
    }
  
    function buildSection(section, entries) {
      entries = entries.filter(x => x !== null);
      if (entries.length === 0) return null;
      return `For ${section} ROM: ${entries.join(", ")}.`;
    }
  
    // Cervical
    let cervical = [];
    cervical.push(getEntry("Flexion", "cervical-flexion", "cervical-flexion-max", 80, "flexion-pain", "flexion-tenderness", "flexion-stiffness"));
    cervical.push(getEntry("Extension", "cervical-extension", "cervical-extension-max", 50, "extension-pain", "extension-tenderness", "extension-stiffness"));
    cervical.push(getEntry("Left lateral flexion", "cervical-latflex-left", "cervical-latflex-left-max", 45, "latflex-left-pain", "latflex-left-tenderness", "latflex-left-stiffness"));
    cervical.push(getEntry("Right lateral flexion", "cervical-latflex-right", "cervical-latflex-right-max", 45, "latflex-right-pain", "latflex-right-tenderness", "latflex-right-stiffness"));
    cervical.push(getEntry("Left rotation", "cervical-rotation-left", "cervical-rotation-left-max", 80, "rotation-left-pain", "rotation-left-tenderness", "rotation-left-stiffness"));
    cervical.push(getEntry("Right rotation", "cervical-rotation-right", "cervical-rotation-right-max", 80, "rotation-right-pain", "rotation-right-tenderness", "rotation-right-stiffness"));
  
    // Thoracic
    let thoracic = [];
    thoracic.push(getEntry("Flexion", "thoracic-flexion", "thoracic-flexion-max", 50, "thoracic-flexion-pain", "thoracic-flexion-tenderness", "thoracic-flexion-stiffness"));
    thoracic.push(getEntry("Extension", "thoracic-extension", "thoracic-extension-max", 25, "thoracic-extension-pain", "thoracic-extension-tenderness", "thoracic-extension-stiffness"));
    thoracic.push(getEntry("Left rotation", "thoracic-rotation-left", "thoracic-rotation-left-max", 35, "thoracic-rotation-left-pain", "thoracic-rotation-left-tenderness", "thoracic-rotation-left-stiffness"));
    thoracic.push(getEntry("Right rotation", "thoracic-rotation-right", "thoracic-rotation-right-max", 35, "thoracic-rotation-right-pain", "thoracic-rotation-right-tenderness", "thoracic-rotation-right-stiffness"));
  
    // Lumbar
    let lumbar = [];
    lumbar.push(getEntry("Flexion", "lumbar-flexion", "lumbar-flexion-max", 60, "lumbar-flexion-pain", "lumbar-flexion-tenderness", "lumbar-flexion-stiffness"));
    lumbar.push(getEntry("Extension", "lumbar-extension", "lumbar-extension-max", 25, "lumbar-extension-pain", "lumbar-extension-tenderness", "lumbar-extension-stiffness"));
    lumbar.push(getEntry("Left lateral flexion", "lumbar-latflex-left", "lumbar-latflex-left-max", 25, "lumbar-latflex-left-pain", "lumbar-latflex-left-tenderness", "lumbar-latflex-left-stiffness"));
    lumbar.push(getEntry("Right lateral flexion", "lumbar-latflex-right", "lumbar-latflex-right-max", 25, "lumbar-latflex-right-pain", "lumbar-latflex-right-tenderness", "lumbar-latflex-right-stiffness"));
  
    let sections = [];
    const cervicalSummary = buildSection("Cervical", cervical);
    const thoracicSummary = buildSection("Thoracic", thoracic);
    const lumbarSummary = buildSection("Lumbar", lumbar);
  
    if (cervicalSummary) sections.push(cervicalSummary);
    if (thoracicSummary) sections.push(thoracicSummary);
    if (lumbarSummary) sections.push(lumbarSummary);
  
    let summary = sections.length > 0 ? sections.join("\n") : "No abnormal ROM findings noted.";
    document.getElementById("output").value = summary;
  });
  