// Full disease dataset with symptoms and recommended specialists
const diseaseData = {
    "ADHD": {
        symptoms: ["Inattention", "Hyperactivity", "Impulsivity"],
        specialist: "Psychiatrist or Pediatric Neurologist"
    },
    "Acne": {
        symptoms: ["Pimples", "Blackheads", "Skin inflammation"],
        specialist: "Dermatologist"
    },
    "Alcohol Addiction": {
        symptoms: ["Cravings", "Withdrawal symptoms", "Loss of control"],
        specialist: "Addiction Specialist or Psychiatrist"
    },
    "Allergies": {
        symptoms: ["Sneezing", "Runny nose", "Itching"],
        specialist: "Allergist/Immunologist"
    },
    "Alzheimer": {
        symptoms: ["Memory loss", "Confusion", "Difficulty with daily tasks"],
        specialist: "Neurologist or Geriatrician"
    },
    "Amoebiasis": {
        symptoms: ["Diarrhea", "Stomach cramps", "Fatigue"],
        specialist: "Gastroenterologist"
    },
    "Anaemia": {
        symptoms: ["Fatigue", "Paleness", "Shortness of breath"],
        specialist: "Hematologist or General Physician"
    },
    "Anaesthesia - Local": {
        symptoms: ["Numbness in specific areas", "Temporary loss of sensation"],
        specialist: "Anesthesiologist"
    },
    "Anaesthesia General": {
        symptoms: ["Unconsciousness", "Total body relaxation"],
        specialist: "Anesthesiologist"
    },
    "Anal Fissure": {
        symptoms: ["Painful bowel movements", "Bleeding", "Itching"],
        specialist: "Proctologist or Gastroenterologist"
    },
    "Angina": {
        symptoms: ["Chest pain", "Shortness of breath", "Fatigue"],
        specialist: "Cardiologist"
    },
    "Anti allergic": {
        symptoms: ["Runny nose", "Itching", "Sneezing"],
        specialist: "Allergist/Immunologist"
    },
    "Anti-Scar": {
        symptoms: ["Visible scars", "Skin discoloration"],
        specialist: "Dermatologist"
    },
    "Antibiotic": {
        symptoms: ["Bacterial infections", "Inflammation", "Fever"],
        specialist: "General Physician"
    },
    "Anxiety": {
        symptoms: ["Restlessness", "Fear", "Panic attacks"],
        specialist: "Psychiatrist or Psychologist"
    },
    "Apnea": {
        symptoms: ["Interrupted breathing", "Snoring", "Daytime fatigue"],
        specialist: "Pulmonologist or Sleep Specialist"
    },
    "Appetite": {
        symptoms: ["Increased hunger", "Loss of appetite", "Weight fluctuations"],
        specialist: "Endocrinologist or Dietitian"
    },
    "Arrhythmiasis": {
        symptoms: ["Irregular heartbeat", "Dizziness", "Shortness of breath"],
        specialist: "Cardiologist"
    },
    "Arthritis": {
        symptoms: ["Joint pain", "Stiffness", "Swelling"],
        specialist: "Rheumatologist"
    },
    "Asthma/COPD": {
        symptoms: ["Shortness of breath", "Wheezing", "Chest tightness"],
        specialist: "Pulmonologist"
    },
    "Atopic Dermatitis (Eczema)": {
        symptoms: ["Itchy skin", "Rashes", "Dry skin"],
        specialist: "Dermatologist"
    },
    "Auto Immune Disease": {
        symptoms: ["Chronic fatigue", "Joint pain", "Rashes"],
        specialist: "Rheumatologist or Immunologist"
    },
    "Ayurvedic Medicine": {
        symptoms: ["Holistic wellness", "Herbal remedies"],
        specialist: "Ayurvedic Practitioner"
    },
    // Add diseases from B-Z
    "Bacterial Infections": {
        symptoms: ["Fever", "Redness", "Swelling"],
        specialist: "Infectious Disease Specialist"
    },
    "Bladder And Prostate Disorders": {
        symptoms: ["Frequent urination", "Pelvic pain"],
        specialist: "Urologist"
    },
    "Bleeding Disorders": {
        symptoms: ["Uncontrolled bleeding", "Bruising", "Anemia"],
        specialist: "Hematologist"
    },
    "Blood Clot": {
        symptoms: ["Pain in limbs", "Swelling", "Redness"],
        specialist: "Vascular Specialist"
    },
    "Bone Metabolism": {
        symptoms: ["Bone pain", "Fractures", "Weakness"],
        specialist: "Orthopedist or Endocrinologist"
    },
    "Burns": {
        symptoms: ["Skin redness", "Blisters", "Pain"],
        specialist: "Burn Specialist or Plastic Surgeon"
    },
    "Cancer Oncology": {
        symptoms: ["Unexplained weight loss", "Fatigue", "Lumps"],
        specialist: "Oncologist"
    },
    "Cardiac Arrest": {
        symptoms: ["Sudden collapse", "No pulse", "No breathing"],
        specialist: "Cardiologist or Emergency Physician"
    },
    "Cholelithiasis/Gall Stones": {
        symptoms: ["Abdominal pain", "Nausea", "Jaundice"],
        specialist: "Gastroenterologist"
    },
    "Cleanser": {
        symptoms: ["Skin cleansing", "Oil removal", "Dirt"],
        specialist: "Dermatologist"
    },
    "Constipation": {
        symptoms: ["Difficulty passing stool", "Hard stools", "Abdominal pain"],
        specialist: "Gastroenterologist"
    },
    "Contraception": {
        symptoms: ["Birth control planning"],
        specialist: "Gynecologist"
    },
    "Cough And Cold": {
        symptoms: ["Sneezing", "Cough", "Sore throat"],
        specialist: "General Physician or ENT Specialist"
    },
    "Dandruff": {
        symptoms: ["Itchy scalp", "Flakes", "Dryness"],
        specialist: "Dermatologist"
    },
    "Depression": {
        symptoms: ["Sadness", "Loss of interest", "Fatigue"],
        specialist: "Psychiatrist or Psychologist"
    },
    "Diabetes": {
        symptoms: ["Excessive thirst", "Frequent urination", "Fatigue"],
        specialist: "Endocrinologist"
    },
    "Diagnostic": {
        symptoms: ["Need for diagnostic tests"],
        specialist: "Pathologist or General Physician"
    },
    "Diarrhoea": {
        symptoms: ["Frequent loose stools", "Dehydration", "Stomach cramps"],
        specialist: "Gastroenterologist"
    },
    "Digestion": {
        symptoms: ["Bloating", "Indigestion", "Abdominal pain"],
        specialist: "Gastroenterologist"
    },
    "Dry Eye": {
        symptoms: ["Itchy eyes", "Redness", "Sensitivity to light"],
        specialist: "Ophthalmologist"
    },
    "Dry Skin": {
        symptoms: ["Rough texture", "Flaking", "Itching"],
        specialist: "Dermatologist"
    },
    "Ear Conditions": {
        symptoms: ["Pain", "Hearing loss", "Discharge"],
        specialist: "ENT Specialist"
    },
    "Epilepsy/Convulsion": {
        symptoms: ["Seizures", "Loss of consciousness", "Twitching"],
        specialist: "Neurologist"
    },
    "Eye Infections": {
        symptoms: ["Redness", "Swelling", "Discharge"],
        specialist: "Ophthalmologist"
    },
    "Eye conditions": {
        symptoms: ["Blurred vision", "Eye strain", "Sensitivity to light"],
        specialist: "Ophthalmologist"
    },
    "Fever": {
        symptoms: ["High body temperature", "Chills", "Sweating"],
        specialist: "General Physician"
    },
    "Fungal Infections": {
        symptoms: ["Redness", "Itching", "Skin peeling"],
        specialist: "Dermatologist"
    },
    "Gastro Intestinal Motility Disorders": {
        symptoms: ["Bloating", "Constipation", "Nausea"],
        specialist: "Gastroenterologist"
    },
    "General-P": {
        symptoms: ["Routine check-up", "General illness symptoms"],
        specialist: "General Physician"
    },
    "Glaucoma": {
        symptoms: ["Vision loss", "Eye pain", "Blurred vision"],
        specialist: "Ophthalmologist"
    },
    "Gout": {
        symptoms: ["Joint pain", "Swelling", "Redness"],
        specialist: "Rheumatologist"
    },
    "H.Pylori Infection": {
        symptoms: ["Abdominal pain", "Nausea", "Bloating"],
        specialist: "Gastroenterologist"
    },
    "Haematopoiesis": {
        symptoms: ["Fatigue", "Paleness", "Shortness of breath"],
        specialist: "Hematologist"
    },
    "Haemorrhoid": {
        symptoms: ["Painful bowel movements", "Rectal bleeding", "Itching"],
        specialist: "Proctologist"
    },
    "Hair Color - P": {
        symptoms: ["Hair dye", "Hair coloring"],
        specialist: "Dermatologist"
    },
    "Hair Loss": {
        symptoms: ["Thinning hair", "Bald patches", "Excessive shedding"],
        specialist: "Dermatologist"
    },
    "Head Lice": {
        symptoms: ["Itchy scalp", "Visible lice", "Eggs on hair shafts"],
        specialist: "Dermatologist"
    },
    "Heart Failure": {
        symptoms: ["Shortness of breath", "Fatigue", "Swelling in legs"],
        specialist: "Cardiologist"
    },
    "High Cholesterol": {
        symptoms: ["Fatigue", "Chest pain", "Shortness of breath"],
        specialist: "Cardiologist"
    },
    "Hirsutism": {
        symptoms: ["Excessive hair growth", "Male pattern hair growth in women"],
        specialist: "Endocrinologist or Dermatologist"
    },
    "Hormonal Therapy": {
        symptoms: ["Mood changes", "Hot flashes", "Fatigue"],
        specialist: "Endocrinologist"
    },
    "Hyperpigmentation": {
        symptoms: ["Darkened skin", "Uneven skin tone", "Freckles"],
        specialist: "Dermatologist"
    },
    "Hypertension": {
        symptoms: ["Headaches", "Blurred vision", "Dizziness"],
        specialist: "Cardiologist or General Physician"
    },
    "Hyperthyroidism": {
        symptoms: ["Rapid heart rate", "Weight loss", "Excessive sweating"],
        specialist: "Endocrinologist"
    },
    "Hypnosis": {
        symptoms: ["Relaxation", "Behavioral changes"],
        specialist: "Psychiatrist or Hypnotherapist"
    },
    "Hyponatremia": {
        symptoms: ["Fatigue", "Nausea", "Headache"],
        specialist: "General Physician or Endocrinologist"
    },
    "Hypotension": {
        symptoms: ["Dizziness", "Fainting", "Weakness"],
        specialist: "Cardiologist or General Physician"
    },
    "Hypothyroidism": {
        symptoms: ["Fatigue", "Weight gain", "Dry skin"],
        specialist: "Endocrinologist"
    },
    "Idiopathic Pulmonary Fibrosis": {
        symptoms: ["Shortness of breath", "Chronic dry cough", "Fatigue"],
        specialist: "Pulmonologist"
    },
    "Immune Sera": {
        symptoms: ["Immunization", "Vaccine response", "Infection protection"],
        specialist: "Immunologist"
    },
    "Immune Suppression": {
        symptoms: ["Increased infection risk", "Fatigue", "Rashes"],
        specialist: "Immunologist"
    },
    "Immunoglobulins": {
        symptoms: ["Increased infection frequency", "Immune system deficiencies"],
        specialist: "Immunologist"
    },
    "Impotence/Erectile Dysfunction (Ed)": {
        symptoms: ["Inability to maintain erection", "Decreased libido", "Anxiety about performance"],
        specialist: "Urologist or Endocrinologist"
    },
    "Intermittent Claudication": {
        symptoms: ["Leg pain during walking", "Fatigue", "Muscle cramps"],
        specialist: "Vascular Surgeon"
    },
    "Iron Supplement/Anaemia": {
        symptoms: ["Fatigue", "Paleness", "Shortness of breath"],
        specialist: "Hematologist"
    },
    "Itching/Dry Skin": {
        symptoms: ["Dryness", "Redness", "Flaking"],
        specialist: "Dermatologist"
    },
    "Kidney Disease/Stones": {
        symptoms: ["Painful urination", "Back pain", "Nausea"],
        specialist: "Urologist or Nephrologist"
    },
    "Leprosy": {
        symptoms: ["Skin lesions", "Numbness", "Muscle weakness"],
        specialist: "Dermatologist"
    },
    "Liver Disease": {
        symptoms: ["Jaundice", "Fatigue", "Abdominal pain"],
        specialist: "Gastroenterologist or Hepatologist"
    },
    "Malarial": {
        symptoms: ["Fever", "Chills", "Sweating"],
        specialist: "Infectious Disease Specialist"
    },
    "Melasma": {
        symptoms: ["Brown patches on skin", "Hyperpigmentation", "Sun sensitivity"],
        specialist: "Dermatologist"
    },
    "Migraine": {
        symptoms: ["Severe headache", "Nausea", "Sensitivity to light"],
        specialist: "Neurologist"
    },
    "Mucolytic Agent": {
        symptoms: ["Thick mucus", "Coughing", "Difficulty breathing"],
        specialist: "Pulmonologist"
    },
    "Multiple Sclerosis": {
        symptoms: ["Vision problems", "Numbness", "Difficulty walking"],
        specialist: "Neurologist"
    },
    "Muscle Cramps/Spasticity": {
        symptoms: ["Muscle stiffness", "Pain", "Difficulty moving"],
        specialist: "Neurologist"
    },
    "Muscle Spasm": {
        symptoms: ["Involuntary muscle contraction", "Pain", "Stiffness"],
        specialist: "Orthopedist or Neurologist"
    },
    "Myasthenia Gravis": {
        symptoms: ["Weakness in muscles", "Difficulty swallowing", "Fatigue"],
        specialist: "Neurologist"
    },
    "Mydriasis": {
        symptoms: ["Dilated pupils", "Sensitivity to light", "Blurred vision"],
        specialist: "Ophthalmologist"
    },
    "Nappy Rash": {
        symptoms: ["Red rash", "Irritation", "Discomfort"],
        specialist: "Pediatrician"
    },
    "Nasal Congestion": {
        symptoms: ["Blocked nose", "Difficulty breathing through nose", "Sneezing"],
        specialist: "ENT Specialist"
    },
    "Neuropathic Pain": {
        symptoms: ["Burning sensations", "Tingling", "Numbness"],
        specialist: "Neurologist"
    },
    "Nootropics And Neurotrophics": {
        symptoms: ["Cognitive enhancement", "Memory improvement", "Mental clarity"],
        specialist: "Neurologist"
    },
    "Obesity": {
        symptoms: ["Excess body weight", "Shortness of breath", "Fatigue"],
        specialist: "Endocrinologist or Dietitian"
    },
    "Oral Care": {
        symptoms: ["Bad breath", "Gum disease", "Tooth decay"],
        specialist: "Dentist"
    },
    "Osteoporosis": {
        symptoms: ["Bone pain", "Fractures", "Loss of height"],
        specialist: "Orthopedist or Rheumatologist"
    },
    "Pain relief": {
        symptoms: ["Headache", "Back pain", "Muscle soreness"],
        specialist: "General Physician"
    },
    "Parasitic Worms": {
        symptoms: ["Abdominal pain", "Nausea", "Diarrhea"],
        specialist: "Infectious Disease Specialist"
    },
    "Parkinsonism": {
        symptoms: ["Tremors", "Slowness of movement", "Muscle stiffness"],
        specialist: "Neurologist"
    },
    "Peripheral Hypertension": {
        symptoms: ["High blood pressure", "Fatigue", "Chest pain"],
        specialist: "Cardiologist"
    },
    "Peripheral Vascular Disease": {
        symptoms: ["Leg pain", "Numbness", "Cold extremities"],
        specialist: "Vascular Surgeon"
    },
    "Poisoning/Overdose": {
        symptoms: ["Nausea", "Vomiting", "Loss of consciousness"],
        specialist: "Emergency Physician or Toxicologist"
    },
    "Polycystic Ovary Syndrome (PCOS)": {
        symptoms: ["Irregular periods", "Weight gain", "Excessive hair growth"],
        specialist: "Endocrinologist or Gynecologist"
    },
    "Pregnancy Testing Kit": {
        symptoms: ["Missed period", "Morning sickness", "Breast tenderness"],
        specialist: "Gynecologist"
    },
    "Premature Ejaculation": {
        symptoms: ["Ejaculation before desired", "Reduced sexual satisfaction"],
        specialist: "Urologist or Sexologist"
    },
    "Psoriasis": {
        symptoms: ["Red patches on skin", "Itching", "Scaling"],
        specialist: "Dermatologist"
    },
    "Psoriasis/Seborrhea/Ichthyosis": {
        symptoms: ["Scaly skin", "Itching", "Redness"],
        specialist: "Dermatologist"
    },
    "Psychosis": {
        symptoms: ["Hallucinations", "Delusions", "Disorganized thinking"],
        specialist: "Psychiatrist"
    },
    "Pulmonary Arterial Hypertension (PAH)": {
        symptoms: ["Shortness of breath", "Fatigue", "Chest pain"],
        specialist: "Cardiologist or Pulmonologist"
    },
    "Rabies": {
        symptoms: ["Fever", "Headache", "Hydrophobia (fear of water)"],
        specialist: "Infectious Disease Specialist"
    },
    "Rheumatoid Arthritis": {
        symptoms: ["Joint pain", "Swelling", "Fatigue"],
        specialist: "Rheumatologist"
    },
    "Scabies": {
        symptoms: ["Itching", "Rash", "Blisters"],
        specialist: "Dermatologist"
    },
    "Scar": {
        symptoms: ["Raised or depressed tissue", "Redness", "Hardness"],
        specialist: "Dermatologist"
    },
    "Schizophrenia": {
        symptoms: ["Hallucinations", "Delusions", "Disorganized speech"],
        specialist: "Psychiatrist"
    },
    "Skin Infections": {
        symptoms: ["Redness", "Swelling", "Pus formation"],
        specialist: "Dermatologist"
    },
    "Smoking Cessation": {
        symptoms: ["Nicotine cravings", "Mood swings", "Increased appetite"],
        specialist: "Pulmonologist or Addiction Specialist"
    },
    "Stretch Marks": {
        symptoms: ["Streaks on skin", "Itchy skin", "Red or purple lines"],
        specialist: "Dermatologist"
    },
    "Sun Protectors": {
        symptoms: ["Sunburn", "Tanning", "Skin damage"],
        specialist: "Dermatologist"
    },
    "Sunscreen Preparations": {
        symptoms: ["Sunburn", "Tanning", "Skin damage"],
        specialist: "Dermatologist"
    },
    "Supplements": {
        symptoms: ["Deficiency signs (e.g., fatigue, hair loss)"],
        specialist: "General Physician or Dietitian"
    },
    "Surgicals": {
        symptoms: ["Preoperative and postoperative care"],
        specialist: "Surgeon"
    },
    "Tetanus": {
        symptoms: ["Muscle spasms", "Lockjaw", "Fever"],
        specialist: "Infectious Disease Specialist"
    },
    "Thrombotic Disorder": {
        symptoms: ["Swelling", "Pain", "Redness in limbs"],
        specialist: "Hematologist"
    },
    "Ulcer/Reflux/Flatulence": {
        symptoms: ["Heartburn", "Abdominal pain", "Bloating"],
        specialist: "Gastroenterologist"
    },
    "Ulcerative Colitis/Bowel Inflammatory Disease": {
        symptoms: ["Abdominal pain", "Diarrhea", "Blood in stool"],
        specialist: "Gastroenterologist"
    },
    "Urinary Retention": {
        symptoms: ["Inability to urinate", "Painful urination", "Full bladder feeling"],
        specialist: "Urologist"
    },
    "Uterus Conditions": {
        symptoms: ["Pelvic pain", "Irregular periods", "Heavy bleeding"],
        specialist: "Gynecologist"
    },
    "UTI Infections": {
        symptoms: ["Frequent urination", "Burning sensation", "Pelvic pain"],
        specialist: "Urologist"
    },
    "Vaccines": {
        symptoms: ["Immunization", "Preventive care"],
        specialist: "General Physician or Pediatrician"
    },
    "Vaginal Conditions": {
        symptoms: ["Itching", "Discharge", "Odor"],
        specialist: "Gynecologist"
    },
    "Varicose Veins": {
        symptoms: ["Swollen veins", "Leg pain", "Itching"],
        specialist: "Vascular Surgeon"
    },
    "Vertigo": {
        symptoms: ["Dizziness", "Loss of balance", "Spinning sensation"],
        specialist: "Neurologist or ENT Specialist"
    },
    "Veterinary-Pharma": {
        symptoms: ["Animal health products"],
        specialist: "Veterinarian"
    },
    "Viral Infections": {
        symptoms: ["Fever", "Cough", "Fatigue"],
        specialist: "Infectious Disease Specialist"
    },
    "Vitiligo": {
        symptoms: ["Loss of skin pigment", "White patches on skin"],
        specialist: "Dermatologist"
    },
    "Vomiting/Emesis": {
        symptoms: ["Nausea", "Projectile vomiting", "Abdominal pain"],
        specialist: "Gastroenterologist or General Physician"
    },
    "Warts/Calluses/Other Skin Lesion": {
        symptoms: ["Raised, rough patches", "Warts", "Hard skin areas"],
        specialist: "Dermatologist"
    },
    "Wound Care": {
        symptoms: ["Cuts", "Scrapes", "Infected wounds"],
        specialist: "Surgeon or Wound Care Specialist"
    },
    "Wrinkle/Anti-Ageing": {
        symptoms: ["Fine lines", "Loss of skin elasticity", "Sagging skin"],
        specialist: "Dermatologist or Plastic Surgeon"
    }
};


// Populate symptom list dynamically based on all symptoms in the dataset
document.addEventListener("DOMContentLoaded", () => {
    const symptomList = document.getElementById("symptom-list");

    // Extract unique symptoms
    const allSymptoms = new Set();
    Object.values(diseaseData).forEach(disease =>
        disease.symptoms.forEach(symptom => allSymptoms.add(symptom))
    );

    // Create checkboxes for all symptoms
    allSymptoms.forEach(symptom => {
        const checkbox = document.createElement("div");
        checkbox.className = "checkbox-label";
        checkbox.innerHTML = `
            <input type="checkbox" id="${symptom}" name="symptoms" value="${symptom}">
            <label for="${symptom}">${symptom}</label>
        `;
        symptomList.appendChild(checkbox);
    });

    // Attach event listeners to buttons
    document.getElementById("analyze-btn").addEventListener("click", analyzeSymptoms);
    document.getElementById("reset-btn").addEventListener("click", resetForm);
});

// Analyze symptoms and find possible diseases
function analyzeSymptoms() {
    const selectedSymptoms = Array.from(document.querySelectorAll('input[name="symptoms"]:checked'))
        .map(input => input.value);

    if (selectedSymptoms.length === 0) {
        alert("Please select at least one symptom.");
        return;
    }

    const resultSet = [];

    // Match symptoms to diseases
    Object.keys(diseaseData).forEach(disease => {
        const { symptoms, specialist } = diseaseData[disease];
        if (selectedSymptoms.some(symptom => symptoms.includes(symptom))) {
            resultSet.push({ disease, specialist });
        }
    });

    const resultList = document.getElementById("result-list");
    resultList.innerHTML = ""; // Clear previous results

    if (resultSet.length > 0) {
        resultSet.forEach(result => {
            const resultItem = document.createElement("p");
            resultItem.innerHTML = `<strong>${result.disease}</strong>: Consult a <em>${result.specialist}</em>`;
            resultList.appendChild(resultItem);
        });
    } else {
        resultList.innerHTML = "<p>No matching diseases found for the selected symptoms.</p>";
    }

    // Show results section
    document.getElementById("questionnaire").style.display = "none";
    document.getElementById("results").style.display = "block";
}

// Reset the form to start again
function resetForm() {
    document.querySelectorAll('input[name="symptoms"]').forEach(input => (input.checked = false));
    document.getElementById("results").style.display = "none";
    document.getElementById("questionnaire").style.display = "block";
}
