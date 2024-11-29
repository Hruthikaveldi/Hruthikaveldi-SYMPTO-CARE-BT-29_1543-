// Sample data for diseases and drugs
const diseases = {
    A: ["ADHD", "Acne", "Alcohol Addiction", "Allergies", "Alzheimer", "Amoebiasis", "Anaemia", "Anaesthesia - Local", "Anaesthesia General", "Anal Fissure", "Angina", "Anti allergic", "Anti-Scar", "Antibiotic", "Anxiety", "Apnea", "Appetite", "Arrhythmiasis", "Arthritis", "Asthma/COPD", "Atopic Dermatitis(Eczema)", "Auto Immune Disease", "Ayurvedic Medicine"],
    B: ["Bacterial Infections","Bladder And Prostate Disorders","Bleeding Disorders","Blood Clot","Bone Metabolism","Burns"],
    C: ["Cancer Oncology","Cardiac Arrest","Cholelithiasis/Gall Stones","Cleanser","Constipation","Contraception","Cough And Cold"],
    D: ["Dandruff","Denture Adhesive","Depression","Diabetes","Diagnostic","Diarrhoea","Digestion","Dry Eye","Dry Skin (629)"],
    E: ["Ear Conditions","Epilepsy/Convulsion","Eye Infections","Eye conditions"],
    F: ["Fever","Fungal","Fungal Infections"],
    G: ["Gastro Intestinal Motility Disorders","General-P","Glaucoma","Gout"],
    H: ["H.Pylori Infection","Haematopoiesis","Haemorrhoid","Hair Color - P","Hair Loss","Head Lice","Heart Failure","High Cholesterol","Hirsutism","Hormonal Therapy","Hyperpigmentation","Hypertension","Hyperthyroidism","Hypnosis","Hyponatremia","Hypotension","Hypothyroidism"],
    I: ["Idiopathic Pulmonary Fibrosis","Immune Sera","Immune Suppression","Immunoglobulins","Impotence/Erectile Dysfunction (Ed)","Intermittent Claudication","Iron Supplement/Anaemia","Itching/Dry Skin"],
    K: ["Kidney Disease/Stones"],
    L: ["Leprosy","Liver Disease"],
    M: ["Malarial","Melasma","Migraine","Mucolytic Agent","Multiple Sclerosis","Muscle Cramps/Spasticity (215)","Muscle Spasm","Myasthenia Gravis","Mydriasis"],
    N: ["Nappy Rash:,Nasal Congestion","Neuropathic Pain","Nootropics And Neurotrophics"],
    O: ["Obesity","Oral Care - P","Osteoporosis (49)"],
    P: ["Pain relief","Parasitic Worms","Parkinsonism","Peripheral Hypertension","Peripheral Vascular Disease (10)","Poisoning/Overdose","Polycystic ovary syndrome(PCOS)","Pregnancy Testing Kit","Premature Ejaculation (4)","Psoriasis","Psoriasis/Seborrhea/Ichthyosis","Psychosis","Pulmonary Arterial Hypertension (Pah)"],
    R: ["Rabies","Rheumatoid Arthritis"],
    S: ["Scabies","Scar","Schizophrenia","Skin Infections","Smoking cessation","Stretch Marks (12)","Sun Protectors","Sunscreen Preparations","Supplements","Surgicals"],
    T: ["Tetanus","Thrombotic Disorder"],
    U: ["Ulcer/Reflux/Flatulence","Ulcerative Colitis/Bowel Inflammatory Disease","Urinary Retention (22)","Uterus Conditions","Uti Infections"],
    V: ["Vaccines","Vaginal Conditions","Varicose Veins","Vertigo","Veterinary-Pharma (134)","Viral infections","Vitiligo","Vomitting/Emesis"],
    W: ["Warts/Calluses/Other Skin Lesion","Wound Care","Wrinkle/Anti Ageing"]
};

const diseaseInfo = {
    "ADHD": {
        description: "Attention Deficit Hyperactivity Disorder is a neurodevelopmental disorder characterized by inattention and hyperactivity-impulsivity.",
        symptoms: "Inattention, hyperactivity, impulsivity.",
        treatment: "Stimulant medications (e.g., Ritalin), therapy, behavioral interventions."
    },
    "Acne": {
        description: "A common skin condition caused by clogged hair follicles, oil, and dead skin cells.",
        symptoms: "Pimples, blackheads, whiteheads, cysts.",
        treatment: "Topical creams, antibiotics, retinoids, hormonal therapy."
    },
    "Alcohol Addiction": {
        description: "A chronic disease characterized by an inability to control alcohol consumption.",
        symptoms: "Craving, withdrawal symptoms, inability to reduce drinking.",
        treatment: "Counseling, support groups (e.g., AA), medications like naltrexone."
    },
    "Allergies": {
        description: "An immune response to substances like pollen, food, or animal dander.",
        symptoms: "Sneezing, itching, rash, swelling, anaphylaxis (severe cases).",
        treatment: "Antihistamines, decongestants, immunotherapy."
    },
    "Alzheimer": {
        description: "A progressive neurological disorder leading to memory loss and cognitive decline.",
        symptoms: "Memory loss, confusion, difficulty completing tasks.",
        treatment: "Medications (e.g., donepezil), cognitive therapy, supportive care."
    },
    "Amoebiasis": {
        description: "An intestinal infection caused by the parasite Entamoeba histolytica.",
        symptoms: "Diarrhea, abdominal pain, fever.",
        treatment: "Antiparasitic drugs like metronidazole."
    },
    "Anaemia": {
        description: "A condition where the blood lacks enough healthy red blood cells or hemoglobin.",
        symptoms: "Fatigue, weakness, pale skin, shortness of breath.",
        treatment: "Iron supplements, dietary changes, addressing underlying causes."
    },
    "Anaesthesia - Local": {
        description: "A method to numb a specific area of the body during minor surgical procedures.",
        symptoms: "Numbness in the applied area, temporary loss of sensation.",
        treatment: "Local anesthetics like lidocaine."
    },
    "Anaesthesia General": {
        description: "A state of controlled unconsciousness for major surgical procedures.",
        symptoms: "Unconsciousness, lack of sensation, muscle relaxation.",
        treatment: "Drugs like propofol or isoflurane administered by an anesthesiologist."
    },
    "Anal Fissure": {
        description: "A small tear in the lining of the anus causing pain and bleeding.",
        symptoms: "Pain during bowel movements, bleeding, itching.",
        treatment: "Stool softeners, topical creams, surgery in severe cases."
    },
    "Angina": {
        description: "Chest pain due to reduced blood flow to the heart muscles.",
        symptoms: "Chest pain, pressure, or discomfort, especially during exertion.",
        treatment: "Nitroglycerin, beta-blockers, lifestyle changes."
    },
    "Anti allergic": {
        description: "Medications used to treat or prevent allergic reactions.",
        symptoms: "Itching, hives, sneezing, swelling.",
        treatment: "Antihistamines (e.g., cetirizine), corticosteroids."
    },
    "Anti-Scar": {
        description: "Medications or creams aimed at reducing the appearance of scars.",
        symptoms: "Raised or discolored skin at the site of injury.",
        treatment: "Silicone gel, scar creams, laser therapy."
    },
    "Antibiotic": {
        description: "Drugs used to treat bacterial infections.",
        symptoms: "Varies depending on infection type.",
        treatment: "Penicillin, amoxicillin, azithromycin, etc."
    },
    "Anxiety": {
        description: "A mental health condition marked by excessive worry or fear.",
        symptoms: "Restlessness, rapid heartbeat, trouble concentrating.",
        treatment: "Cognitive-behavioral therapy, SSRIs, lifestyle changes."
    },
    "Apnea": {
        description: "A sleep disorder where breathing repeatedly stops and starts.",
        symptoms: "Snoring, fatigue, gasping during sleep.",
        treatment: "CPAP machines, weight loss, surgery in severe cases."
    },
    "Appetite": {
        description: "Issues with reduced or increased desire to eat.",
        symptoms: "Weight loss or gain, fatigue, nutritional imbalances.",
        treatment: "Appetite stimulants, addressing underlying conditions."
    },
    "Arrhythmias": {
        description: "Irregular heart rhythms caused by electrical signal disturbances in the heart.",
        symptoms: "Palpitations, dizziness, fainting, chest pain.",
        treatment: "Medications, pacemakers, lifestyle changes."
    },
    "Arthritis": {
        description: "Inflammation of the joints causing pain and stiffness.",
        symptoms: "Joint pain, swelling, stiffness, reduced mobility.",
        treatment: "NSAIDs, physical therapy, disease-modifying drugs."
    },
    "Asthma/COPD": {
        description: "Chronic respiratory conditions causing airway inflammation or obstruction.",
        symptoms: "Shortness of breath, wheezing, coughing.",
        treatment: "Inhalers, bronchodilators, corticosteroids."
    },
    "Atopic Dermatitis (Eczema)": {
        description: "A chronic skin condition causing itchy, inflamed patches.",
        symptoms: "Dry, itchy skin, red rashes, cracked skin.",
        treatment: "Moisturizers, topical steroids, antihistamines."
    },
    "Auto Immune Disease": {
        description: "Conditions where the immune system attacks the body’s own tissues.",
        symptoms: "Varies (e.g., fatigue, inflammation, pain).",
        treatment: "Immunosuppressants, targeted therapies."
    },
    "Ayurvedic Medicine": {
        description: "Traditional Indian medicine using herbal remedies for holistic healing.",
        symptoms: "Varies by condition treated.",
        treatment: "Herbal treatments, dietary changes, lifestyle modifications."
    },
"Blood Clot": {
    description: "A mass of blood that forms when platelets and proteins stick together, potentially blocking blood flow.",
    symptoms: "Swelling, pain, redness (deep vein thrombosis), chest pain (pulmonary embolism).",
    treatment: "Anticoagulants like heparin, thrombolytics, and compression stockings."
},
"Bone Metabolism": {
    description: "Disorders affecting bone formation, density, and mineral balance.",
    symptoms: "Bone pain, fractures, fatigue, deformities in severe cases.",
    treatment: "Calcium and vitamin D supplements, bisphosphonates, lifestyle adjustments."
},
"Burns": {
    description: "Tissue damage caused by heat, chemicals, electricity, or radiation.",
    symptoms: "Redness, blisters, pain, swelling, or charring (depending on severity).",
    treatment: "Cool water rinses, antibiotic ointments, dressings, and advanced care for severe burns."
},
    "Bacterial Infections": {
        description: "Infections caused by harmful bacteria invading the body.",
        symptoms: "Fever, inflammation, pain, fatigue.",
        treatment: "Antibiotics (e.g., amoxicillin, ciprofloxacin)."
    },
    "Bladder And Prostate Disorders": {
        description: "Conditions affecting the bladder and prostate, such as infections or enlargement.",
        symptoms: "Difficulty urinating, frequent urination, pain.",
        treatment: "Medications (e.g., alpha-blockers), surgery in severe cases."
    },
    "Bleeding Disorders": {
        description: "Conditions affecting the blood's ability to clot properly.",
        symptoms: "Excessive bleeding, easy bruising, prolonged bleeding.",
        treatment: "Clotting factor replacement, vitamin K, medications."
    },
    "Cancer Oncology": {
    description: "The study and treatment of cancer, a disease involving uncontrolled cell growth.",
    symptoms: "Lumps, unexplained weight loss, fatigue, pain, abnormal bleeding.",
    treatment: "Surgery, chemotherapy, radiation therapy, immunotherapy, targeted treatments."
},
"Cardiac Arrest": {
    description: "A sudden loss of heart function due to electrical signal disruption.",
    symptoms: "Loss of consciousness, no pulse, no breathing.",
    treatment: "Immediate CPR, defibrillation, advanced life support in a hospital."
},
"Cholelithiasis/Gall Stones": {
    description: "Solid particles that form in the gallbladder due to imbalances in bile substances.",
    symptoms: "Pain in the upper abdomen, nausea, vomiting, bloating.",
    treatment: "Surgery (cholecystectomy), medications to dissolve stones, or dietary changes."
},
"Cleanser": {
    description: "Products designed to clean the skin by removing dirt, oil, and impurities.",
    symptoms: "N/A (related to skin health and hygiene).",
    treatment: "Use of gentle cleansers, avoiding harsh chemicals, maintaining hydration."
},
"Constipation": {
    description: "A condition characterized by infrequent or difficult bowel movements.",
    symptoms: "Abdominal pain, bloating, hard stools, straining.",
    treatment: "Increased fiber intake, hydration, stool softeners, laxatives if necessary."
},
"Contraception": {
    description: "Methods used to prevent pregnancy through hormonal, barrier, or natural methods.",
    symptoms: "N/A (prevention focus).",
    treatment: "Oral contraceptives, IUDs, condoms, implants, or sterilization procedures."
},
"Cough And Cold": {
    description: "Common viral infections affecting the respiratory system.",
    symptoms: "Runny nose, sneezing, sore throat, coughing, mild fever.",
    treatment: "Rest, fluids, over-the-counter medications like antihistamines or decongestants."
},
"Dandruff": {
    description: "A common scalp condition causing flakes of skin and itching.",
    symptoms: "Flaky white or yellowish scales on the scalp, itchiness.",
    treatment: "Anti-dandruff shampoos containing zinc pyrithione or ketoconazole, scalp care."
},
"Denture Adhesive": {
    description: "Products used to secure dentures in place, improving stability and comfort.",
    symptoms: "N/A (enhances denture use).",
    treatment: "Application of denture adhesive creams or powders as per product instructions."
},
"Depression": {
    description: "A mental health disorder characterized by persistent sadness and loss of interest.",
    symptoms: "Sadness, fatigue, sleep disturbances, changes in appetite, hopelessness.",
    treatment: "Antidepressant medications, therapy (CBT), lifestyle changes, support groups."
},
"Diabetes": {
    description: "A chronic condition characterized by high blood sugar levels due to insulin issues.",
    symptoms: "Frequent urination, excessive thirst, fatigue, blurred vision.",
    treatment: "Lifestyle changes, insulin therapy, oral medications like metformin."
},
"Diagnostic": {
    description: "Medical tools and procedures used to identify diseases or conditions.",
    symptoms: "N/A (related to medical assessments).",
    treatment: "Blood tests, imaging (X-rays, MRIs), biopsies, and specialized tests."
},
"Diarrhoea": {
    description: "A condition characterized by loose, watery stools and increased bowel movements.",
    symptoms: "Abdominal cramps, dehydration, frequent loose stools.",
    treatment: "Hydration (ORS), antidiarrheal medications, addressing underlying causes."
},
"Digestion": {
    description: "The process of breaking down food into nutrients for the body.",
    symptoms: "Indigestion, bloating, heartburn, constipation, or diarrhea (in cases of digestive issues).",
    treatment: "Enzyme supplements, antacids, probiotics, dietary changes."
},
"Dry Eye": {
    description: "A condition where the eyes do not produce enough tears or quality tears.",
    symptoms: "Eye redness, irritation, blurry vision, sensitivity to light.",
    treatment: "Artificial tears, lubricating eye drops, treating underlying causes."
},
"Dry Skin (629)": {
    description: "A condition where the skin lacks moisture, leading to roughness and scaling.",
    symptoms: "Flaky or scaly skin, itchiness, tight feeling on the skin.",
    treatment: "Moisturizers, hydrating creams, avoiding harsh soaps or hot showers."
},
"Ear Conditions": {
    description: "Conditions affecting the ear, including infections and hearing issues.",
    symptoms: "Ear pain, hearing loss, ringing in the ears, discharge.",
    treatment: "Antibiotics for infections, ear drops, hearing aids, or surgical interventions."
},
"Epilepsy/Convulsion": {
    description: "A neurological condition causing recurrent seizures due to abnormal brain activity.",
    symptoms: "Seizures, loss of consciousness, muscle rigidity or jerking.",
    treatment: "Antiepileptic drugs, lifestyle management, or surgery for refractory cases."
},
"Eye Infections": {
    description: "Infections affecting parts of the eye due to bacteria, viruses, or fungi.",
    symptoms: "Redness, swelling, discharge, pain, sensitivity to light.",
    treatment: "Antibiotic or antiviral eye drops, warm compresses, avoiding contact lenses."
},
"Eye Conditions": {
    description: "A broad category covering various eye issues, such as refractive errors, glaucoma, or cataracts.",
    symptoms: "Blurry vision, eye pain, redness, halos, or reduced vision.",
    treatment: "Prescription glasses, medications, surgery (e.g., cataract removal)."
},
"Fever": {
    description: "A temporary rise in body temperature, often due to an infection.",
    symptoms: "High body temperature, sweating, chills, headache, fatigue.",
    treatment: "Antipyretics (e.g., paracetamol), hydration, and addressing underlying infections."
},
"Fungal": {
    description: "Conditions caused by fungal infections, affecting skin, nails, or internal organs.",
    symptoms: "Itchy or scaly skin, discoloration of nails, rashes.",
    treatment: "Antifungal creams, oral antifungal medications, and maintaining hygiene."
},
"Fungal Infections": {
    description: "Infections caused by fungi such as candida or dermatophytes.",
    symptoms: "Redness, scaling, itching, or white patches depending on the affected area.",
    treatment: "Topical or oral antifungals (e.g., clotrimazole, terbinafine)."
},
"Gastro Intestinal Motility Disorders": {
    description: "Conditions where the muscles in the gastrointestinal tract function abnormally.",
    symptoms: "Nausea, bloating, constipation, diarrhea, abdominal pain.",
    treatment: "Prokinetics, dietary adjustments, fiber supplements, or surgical interventions."
},
"General-P": {
    description: "A category for general-purpose or nonspecific medical conditions or medications.",
    symptoms: "N/A (general use).",
    treatment: "N/A (varies depending on specific issues)."
},
"Glaucoma": {
    description: "A group of eye conditions that damage the optic nerve, often due to high eye pressure.",
    symptoms: "Vision loss, halos around lights, eye pain, nausea.",
    treatment: "Eye drops to reduce pressure, laser therapy, or surgery."
},
"Gout": {
    description: "A type of arthritis caused by excess uric acid in the bloodstream.",
    symptoms: "Severe joint pain (often in the big toe), redness, swelling.",
    treatment: "NSAIDs, colchicine, lifestyle changes, and uric acid-lowering medications."
},
"H.Pylori Infection": {
    description: "A bacterial infection of the stomach lining, linked to ulcers and gastritis.",
    symptoms: "Abdominal pain, nausea, bloating, loss of appetite.",
    treatment: "Combination antibiotics (triple or quadruple therapy) and acid suppressants."
},
"Haematopoiesis": {
    description: "The process of blood cell production in the bone marrow.",
    symptoms: "N/A (process-specific).",
    treatment: "Treatment of underlying conditions affecting blood production (e.g., anemia)."
},
"Haemorrhoid": {
    description: "Swollen veins in the lower rectum or anus, commonly called piles.",
    symptoms: "Pain, itching, bleeding during bowel movements, swelling.",
    treatment: "Topical creams, fiber supplements, sitz baths, or surgical removal."
},
"Hair Color - P": {
    description: "Products used for coloring hair, typically involving pigments or dyes.",
    symptoms: "N/A (cosmetic application).",
    treatment: "N/A (application per product instructions)."
},
"Hair Loss": {
    description: "A condition where hair falls out more than normal, leading to thinning or bald patches.",
    symptoms: "Thinning hair, bald spots, receding hairline.",
    treatment: "Minoxidil, finasteride, PRP therapy, or hair transplants."
},
"Head Lice": {
    description: "Tiny insects that infest the scalp and hair, causing itching.",
    symptoms: "Itching, visible lice or eggs (nits) in the hair.",
    treatment: "Medicated shampoos or lotions containing permethrin or ivermectin."
},
"Heart Failure": {
    description: "A chronic condition where the heart cannot pump blood effectively.",
    symptoms: "Shortness of breath, swelling in legs, fatigue, rapid heartbeat.",
    treatment: "Medications (e.g., ACE inhibitors, beta-blockers), lifestyle changes, or surgery."
},
"High Cholesterol": {
    description: "An excess of cholesterol in the blood, increasing the risk of cardiovascular disease.",
    symptoms: "Usually asymptomatic until complications like heart attack or stroke occur.",
    treatment: "Statins, dietary changes, exercise, and weight management."
},
"Hirsutism": {
    description: "Excessive hair growth in women in areas where men typically grow hair.",
    symptoms: "Dark, coarse hair on the face, chest, back, or abdomen.",
    treatment: "Hormonal therapy, hair removal techniques, antiandrogens."
},
"Hormonal Therapy": {
    description: "Treatment involving hormones to address hormonal imbalances or conditions.",
    symptoms: "N/A (specific to condition being treated).",
    treatment: "Estrogen, testosterone, or other hormone replacement therapies."
},
"Hyperpigmentation": {
    description: "A condition where certain areas of the skin become darker than others.",
    symptoms: "Dark patches or spots on the skin.",
    treatment: "Topical treatments (e.g., hydroquinone), chemical peels, laser therapy."
},
"Hypertension": {
    description: "A condition where blood pressure is consistently too high.",
    symptoms: "Often asymptomatic, but may include headaches or shortness of breath.",
    treatment: "Antihypertensive medications, dietary changes, exercise, stress management."
},
"Hyperthyroidism": {
    description: "An overactive thyroid gland producing excessive thyroid hormones.",
    symptoms: "Weight loss, rapid heartbeat, nervousness, heat intolerance.",
    treatment: "Antithyroid medications, radioactive iodine, or surgery."
},
"Hypnosis": {
    description: "A trance-like state used therapeutically to address psychological conditions.",
    symptoms: "N/A (used as therapy).",
    treatment: "Guided hypnosis sessions for conditions like anxiety or phobias."
},
"Hyponatremia": {
    description: "A condition where sodium levels in the blood are too low.",
    symptoms: "Nausea, confusion, fatigue, seizures.",
    treatment: "Fluid restriction, saline infusions, addressing underlying causes."
},
"Hypotension": {
    description: "Abnormally low blood pressure that may cause fainting or shock.",
    symptoms: "Dizziness, fainting, blurry vision, nausea.",
    treatment: "Increased fluid intake, salt, or medications to raise blood pressure."
},
"Hypothyroidism": {
    description: "An underactive thyroid gland producing insufficient thyroid hormones.",
    symptoms: "Fatigue, weight gain, cold sensitivity, dry skin, depression.",
    treatment: "Thyroid hormone replacement therapy (e.g., levothyroxine)."
},
"Idiopathic Pulmonary Fibrosis": {
    description: "A chronic lung disease that results in scarring (fibrosis) of the lungs, reducing their efficiency.",
    symptoms: "Shortness of breath, dry cough, fatigue, unexplained weight loss.",
    treatment: "Antifibrotic drugs (e.g., pirfenidone, nintedanib), oxygen therapy, lung transplantation."
},
"Immune Sera": {
    description: "Serum containing antibodies used to treat or provide immunity against specific diseases.",
    symptoms: "N/A (used for treatment).",
    treatment: "Administered as a passive immunity treatment for conditions like tetanus or rabies."
},
"Immune Suppression": {
    description: "A condition or therapy that reduces the activity of the immune system.",
    symptoms: "Increased susceptibility to infections.",
    treatment: "Immunosuppressive drugs (e.g., corticosteroids, calcineurin inhibitors) for autoimmune diseases or organ transplants."
},
"Immunoglobulins": {
    description: "Antibodies used for treating immune deficiencies or infections.",
    symptoms: "N/A (used therapeutically).",
    treatment: "Intravenous or subcutaneous immunoglobulin therapy for conditions like immune thrombocytopenia."
},
"Impotence/Erectile Dysfunction (ED)": {
    description: "The inability to achieve or maintain an erection for satisfactory sexual activity.",
    symptoms: "Difficulty getting or keeping an erection, reduced sexual desire.",
    treatment: "Medications like sildenafil (Viagra), lifestyle changes, psychological therapy."
},
"Intermittent Claudication": {
    description: "Pain in the legs due to inadequate blood flow, typically caused by peripheral artery disease.",
    symptoms: "Leg pain while walking, numbness, or weakness.",
    treatment: "Medications to improve blood flow, exercise therapy, or surgery."
},
"Iron Supplement/Anaemia": {
    description: "Iron supplementation is used to treat or prevent iron-deficiency anemia.",
    symptoms: "Fatigue, pale skin, shortness of breath (specific to anemia).",
    treatment: "Oral iron supplements, dietary changes, or IV iron therapy."
},
"Itching/Dry Skin": {
    description: "A common condition caused by dehydration, allergies, or skin disorders.",
    symptoms: "Rough, flaky, or itchy skin.",
    treatment: "Moisturizers, antihistamines, topical steroids for severe cases."
},
"Kidney Disease/Stones": {
    description: "Kidney disease affects kidney function, while stones are hard deposits in the kidneys.",
    symptoms: "Pain in the back or side, nausea, blood in urine (stones), swelling (disease).",
    treatment: "Stones: pain management, lithotripsy, or surgery. Disease: dialysis, medications, lifestyle changes."
},
"Leprosy": {
    description: "A chronic bacterial infection caused by *Mycobacterium leprae*, affecting skin and nerves.",
    symptoms: "Skin lesions, numbness, muscle weakness, deformities in severe cases.",
    treatment: "Multidrug therapy (MDT) with rifampin, dapsone, and clofazimine."
},
"Liver Disease": {
    description: "A range of conditions affecting liver function, including hepatitis, cirrhosis, or fatty liver.",
    symptoms: "Jaundice, abdominal pain, fatigue, swelling, confusion.",
    treatment: "Medications, lifestyle changes, and in severe cases, liver transplantation."
},
"Malarial": {
    description: "A parasitic disease caused by *Plasmodium* species transmitted through mosquito bites.",
    symptoms: "Fever, chills, headache, sweating, muscle pain.",
    treatment: "Antimalarial drugs like artemisinin-based therapies or chloroquine."
},
"Melasma": {
    description: "A skin condition characterized by brown or grayish patches, often on the face.",
    symptoms: "Symmetrical dark patches on the skin.",
    treatment: "Topical treatments (e.g., hydroquinone), chemical peels, sun protection."
},
"Migraine": {
    description: "A type of headache characterized by intense throbbing pain, often on one side of the head.",
    symptoms: "Severe headache, nausea, sensitivity to light and sound, visual disturbances.",
    treatment: "Pain relievers, triptans, preventive medications like beta-blockers."
},
"Mucolytic Agent": {
    description: "Medications used to thin and loosen mucus in the respiratory tract.",
    symptoms: "N/A (used for conditions like coughs or chronic bronchitis).",
    treatment: "Drugs like acetylcysteine or bromhexine."
},
"Multiple Sclerosis": {
    description: "A chronic autoimmune disease affecting the central nervous system, leading to nerve damage.",
    symptoms: "Fatigue, numbness, difficulty walking, vision problems, muscle weakness.",
    treatment: "Disease-modifying therapies, steroids for relapses, physical therapy."
},
"Muscle Cramps/Spasticity (215)": {
    description: "Involuntary muscle contractions (cramps) or stiffness (spasticity) caused by various conditions.",
    symptoms: "Painful tightness or spasms in muscles.",
    treatment: "Stretching, hydration, muscle relaxants (e.g., baclofen), or magnesium supplements."
},
"Muscle Spasm": {
    description: "Sudden, involuntary muscle contractions causing pain or discomfort.",
    symptoms: "Tight, painful muscles, often in the legs or back.",
    treatment: "Muscle relaxants, physical therapy, and adequate hydration."
},
"Myasthenia Gravis": {
    description: "A chronic autoimmune disorder causing weakness in skeletal muscles.",
    symptoms: "Muscle weakness, drooping eyelids, difficulty swallowing or speaking.",
    treatment: "Anticholinesterase drugs, corticosteroids, immunosuppressants, or thymectomy."
},
"Mydriasis": {
    description: "The dilation of the pupils, which can occur due to drugs, trauma, or medical conditions.",
    symptoms: "Enlarged pupils, sensitivity to light.",
    treatment: "Treating the underlying cause or using pilocarpine drops to constrict the pupils."
},
"Nappy Rash": {
    description: "A skin irritation in the diaper area caused by prolonged exposure to moisture, bacteria, or irritants.",
    symptoms: "Red, inflamed skin in the diaper region, sometimes with sores or blisters.",
    treatment: "Frequent diaper changes, barrier creams (e.g., zinc oxide), and gentle cleansing."
},
"Nasal Congestion": {
    description: "A blockage or stuffiness in the nasal passages due to inflammation or excess mucus.",
    symptoms: "Stuffy nose, difficulty breathing, sinus pressure.",
    treatment: "Decongestant sprays, antihistamines, saline nasal sprays."
},
"Neuropathic Pain": {
    description: "Pain caused by damage or dysfunction of the nervous system.",
    symptoms: "Burning, shooting, or stabbing pain, numbness, tingling.",
    treatment: "Anticonvulsants (e.g., gabapentin), antidepressants, topical analgesics."
},
"Nootropics and Neurotrophics": {
    description: "Drugs or supplements that enhance brain function or support neural growth.",
    symptoms: "N/A (used for cognitive enhancement or brain health).",
    treatment: "Common nootropics include piracetam, modafinil, or herbal supplements like ginkgo biloba."
},
"Obesity": {
    description: "A condition characterized by excessive body fat that increases the risk of health issues.",
    symptoms: "Excess body weight, difficulty with physical activity, health complications like diabetes.",
    treatment: "Diet and exercise, medications, or bariatric surgery in severe cases."
},
"Oral Care - P": {
    description: "Care products and treatments for maintaining oral hygiene and treating dental issues.",
    symptoms: "N/A (used for prevention and treatment).",
    treatment: "Includes toothpaste, mouthwash, and treatments for specific conditions like cavities or gum disease."
},
"Osteoporosis": {
    description: "A bone condition where bones become weak and prone to fractures.",
    symptoms: "Bone fractures, loss of height, back pain.",
    treatment: "Calcium and vitamin D supplements, bisphosphonates, weight-bearing exercises."
},
"Pain Relief": {
    description: "Management of pain caused by injury, illness, or chronic conditions.",
    symptoms: "Pain can be sharp, dull, localized, or widespread.",
    treatment: "Analgesics (e.g., paracetamol, NSAIDs), opioids for severe pain, physical therapy."
},
"Parasitic Worms": {
    description: "Infections caused by parasites like roundworms, tapeworms, or hookworms.",
    symptoms: "Abdominal pain, diarrhea, weight loss, itching.",
    treatment: "Antiparasitic drugs like albendazole or ivermectin."
},
"Parkinsonism": {
    description: "A group of neurological disorders causing movement abnormalities similar to Parkinson's disease.",
    symptoms: "Tremors, stiffness, slow movement, balance problems.",
    treatment: "Dopaminergic medications (e.g., levodopa), physical therapy, deep brain stimulation."
},
"Peripheral Hypertension": {
    description: "High blood pressure in the arteries outside the heart and brain.",
    symptoms: "Headaches, fatigue, blurred vision (in severe cases).",
    treatment: "Antihypertensive medications, lifestyle modifications."
},
"Peripheral Vascular Disease": {
    description: "A circulatory condition causing reduced blood flow to the limbs.",
    symptoms: "Leg pain, cold extremities, slow healing wounds.",
    treatment: "Lifestyle changes, blood thinners, angioplasty or bypass surgery."
},
"Poisoning/Overdose": {
    description: "Exposure to toxic substances or excessive intake of drugs.",
    symptoms: "Nausea, vomiting, confusion, seizures, loss of consciousness.",
    treatment: "Activated charcoal, antidotes, supportive care, or gastric lavage."
},
"Polycystic Ovary Syndrome (PCOS)": {
    description: "A hormonal disorder causing irregular periods, excess androgen levels, and cysts in the ovaries.",
    symptoms: "Irregular menstruation, acne, weight gain, infertility.",
    treatment: "Lifestyle changes, hormonal contraceptives, and medications like metformin."
},
"Pregnancy Testing Kit": {
    description: "A home test used to detect pregnancy by measuring hCG hormone in urine.",
    symptoms: "N/A (used for detection).",
    treatment: "N/A (a diagnostic tool)."
},
"Premature Ejaculation": {
    description: "A sexual dysfunction where ejaculation occurs sooner than desired during intercourse.",
    symptoms: "Inability to delay ejaculation, distress or frustration.",
    treatment: "Behavioral therapy, desensitizing creams, SSRIs like dapoxetine."
},
"Psoriasis": {
    description: "A chronic autoimmune skin condition causing red, scaly patches.",
    symptoms: "Plaques of thickened skin, itching, or burning sensations.",
    treatment: "Topical treatments, phototherapy, systemic drugs like methotrexate."
},
"Psoriasis/Seborrhea/Ichthyosis": {
    description: "A group of chronic skin conditions characterized by scaling and irritation.",
    symptoms: "Dry, scaly skin, redness, inflammation.",
    treatment: "Moisturizers, corticosteroids, retinoids."
},
"Psychosis": {
    description: "A mental health condition involving a loss of connection with reality.",
    symptoms: "Hallucinations, delusions, disorganized thinking.",
    treatment: "Antipsychotic medications, psychotherapy."
},
"Pulmonary Arterial Hypertension (PAH)": {
    description: "High blood pressure in the arteries of the lungs, causing heart strain.",
    symptoms: "Shortness of breath, fatigue, chest pain.",
    treatment: "Vasodilators, oxygen therapy, or lung transplantation."
},
"Rabies": {
    description: "A viral disease transmitted through animal bites, affecting the nervous system.",
    symptoms: "Fever, agitation, muscle spasms, hydrophobia.",
    treatment: "Post-exposure prophylaxis (PEP) with rabies immunoglobulin and vaccine."
},
"Rheumatoid Arthritis": {
    description: "An autoimmune disease causing chronic joint inflammation and damage.",
    symptoms: "Swollen, painful joints, stiffness, fatigue.",
    treatment: "DMARDs, NSAIDs, biologics, and physical therapy."
},
"Scabies": {
    description: "A contagious skin infestation caused by the Sarcoptes scabiei mite.",
    symptoms: "Itching, especially at night, red bumps, sores, and rashes.",
    treatment: "Topical treatments like permethrin cream or oral medications like ivermectin."
},
"Scar": {
    description: "A mark left on the skin after a wound heals, often due to injury, surgery, or acne.",
    symptoms: "Visible discolored area or raised tissue on the skin.",
    treatment: "Topical scar treatments (e.g., silicone gels), laser therapy, or surgery."
},
"Schizophrenia": {
    description: "A serious mental disorder affecting thinking, emotions, and behavior.",
    symptoms: "Hallucinations, delusions, disorganized thinking, lack of motivation.",
    treatment: "Antipsychotic medications, psychotherapy, and support groups."
},
"Skin Infections": {
    description: "Infections affecting the skin, caused by bacteria, fungi, or viruses.",
    symptoms: "Redness, swelling, pain, blisters, pus.",
    treatment: "Topical or oral antibiotics, antifungal medications, antiviral treatments."
},
"Smoking Cessation": {
    description: "The process of quitting smoking to improve health.",
    symptoms: "Nicotine cravings, irritability, anxiety.",
    treatment: "Nicotine replacement therapy (NRT), medications like varenicline or bupropion, counseling."
},
"Stretch Marks": {
    description: "Striae caused by rapid stretching of the skin, often due to pregnancy or weight gain.",
    symptoms: "Lines or streaks on the skin, usually reddish or purple at first, fading over time.",
    treatment: "Topical creams with retinoids, laser treatments, or microdermabrasion."
},
"Sun Protectors": {
    description: "Products designed to protect the skin from UV radiation.",
    symptoms: "N/A (protects from sunburn and skin aging).",
    treatment: "Sunscreen lotions, sprays, and physical sunblock."
},
"Sunscreen Preparations": {
    description: "Cosmetic products used to protect the skin from UV damage.",
    symptoms: "N/A (used to prevent sunburn and skin damage).",
    treatment: "SPF-based creams, gels, and sprays."
},
"Supplements": {
    description: "Nutritional products taken to supplement the diet.",
    symptoms: "N/A (used for health maintenance).",
    treatment: "Vitamins, minerals, and herbal supplements."
},
"Surgicals": {
    description: "Medical treatments that involve operations or procedures.",
    symptoms: "N/A (used to treat various conditions).",
    treatment: "Surgical procedures, such as surgeries for injury or illness."
},
"Tetanus": {
    description: "A bacterial infection caused by Clostridium tetani, leading to muscle spasms.",
    symptoms: "Painful muscle stiffness, lockjaw, difficulty swallowing.",
    treatment: "Tetanus immunoglobulin (TIG), antibiotics, muscle relaxants, and vaccination."
},
"Thrombotic Disorder": {
    description: "A condition where blood clots form abnormally, potentially blocking blood vessels.",
    symptoms: "Pain, swelling, redness, and possible tissue damage.",
    treatment: "Anticoagulants like heparin or warfarin, clot-busting medications, and compression stockings."
},
"Ulcer/Reflux/Flatulence": {
    description: "A group of digestive issues, including stomach ulcers, acid reflux, and excessive gas.",
    symptoms: "Burning sensation, bloating, belching, abdominal pain.",
    treatment: "Antacids, proton pump inhibitors (PPIs), antidiarrheal medications, and dietary changes."
},
"Ulcerative Colitis/Bowel Inflammatory Disease": {
    description: "Chronic inflammatory bowel diseases causing ulcers in the digestive tract.",
    symptoms: "Abdominal pain, diarrhea, blood in stool, fatigue.",
    treatment: "Anti-inflammatory drugs, immunosuppressants, and sometimes surgery."
},
"Urinary Retention": {
    description: "The inability to empty the bladder completely, often due to obstruction or nerve issues.",
    symptoms: "Difficulty urinating, discomfort, bloating.",
    treatment: "Catheterization, medications, or surgery depending on the underlying cause."
},
"Uterus Conditions": {
    description: "Conditions affecting the uterus, such as fibroids, endometriosis, or uterine cancer.",
    symptoms: "Pelvic pain, heavy menstrual bleeding, infertility.",
    treatment: "Medications, hormonal therapies, or surgeries like hysterectomy."
},
"UTI Infections": {
    description: "Urinary tract infections caused by bacteria affecting the bladder or kidneys.",
    symptoms: "Painful urination, frequent urination, lower abdominal pain, cloudy urine.",
    treatment: "Antibiotics and drinking plenty of fluids."
},
"Vaccines": {
    description: "Biological preparations that improve immunity to specific diseases.",
    symptoms: "N/A (preventive measure).",
    treatment: "Routine vaccinations, such as flu vaccines, MMR, and COVID-19 vaccines."
},
"Vaginal Conditions": {
    description: "Conditions affecting the vaginal area, including infections, dryness, or prolapse.",
    symptoms: "Itching, discomfort, unusual discharge.",
    treatment: "Antifungal medications, lubricants, or hormone therapy."
},
"Varicose Veins": {
    description: "Enlarged veins, typically in the legs, caused by weak or damaged vein walls.",
    symptoms: "Visible, swollen veins, pain, heaviness in the legs.",
    treatment: "Compression stockings, sclerotherapy, or surgery."
},
"Vertigo": {
    description: "A sensation of spinning or dizziness, often caused by an inner ear problem.",
    symptoms: "Dizziness, balance issues, nausea.",
    treatment: "Vestibular rehabilitation, medications like meclizine, or Epley maneuver."
},
"Veterinary-Pharma": {
    description: "Medications and treatments used for animal health care.",
    symptoms: "N/A (used for animals).",
    treatment: "Antibiotics, vaccines, pain relievers, etc., for animals."
},
"Viral Infections": {
    description: "Infections caused by viruses, ranging from the flu to the common cold.",
    symptoms: "Fever, fatigue, coughing, runny nose.",
    treatment: "Antiviral medications, rest, hydration."
},
"Vitiligo": {
    description: "A skin condition causing loss of pigmentation in patches of skin.",
    symptoms: "White, depigmented patches of skin.",
    treatment: "Topical steroids, phototherapy, or skin grafting."
},
"Vomiting/Emesis": {
    description: "The forceful expulsion of stomach contents through the mouth.",
    symptoms: "Nausea, discomfort, and loss of appetite.",
    treatment: "Antiemetic medications, hydration, treating the underlying cause."
},
"Warts/Calluses/Other Skin Lesions": {
    description: "Growths or lesions on the skin, including warts, calluses, or other benign growths.",
    symptoms: "Raised, rough, or thickened skin.",
    treatment: "Cryotherapy, topical treatments, or minor surgical removal."
},
"Wound Care": {
    description: "The treatment and management of injuries or cuts to the skin.",
    symptoms: "N/A (depends on the wound).",
    treatment: "Cleansing, bandaging, and sometimes stitches or surgical intervention."
},
"Wrinkle/Anti-Aging": {
    description: "Treatments aimed at reducing signs of aging, such as wrinkles and sagging skin.",
    symptoms: "Visible lines, loss of skin elasticity.",
    treatment: "Botox, retinoids, chemical peels, or laser treatments."
}





    // Add more diseases here following the same pattern.
};


const drugs = {
    ADHD: [
        {
            name: "Atrest 25mg Tablet 10'S",
            price: "₹335.70",
            mrp: "₹381.48",
            discount: "Save 12%",
            description: "10 Tablet(s) in a Strip",
            manufacturer: "Centaur Pharmaceuticals Pvt Ltd",
            origin: "India",
            image: "atrest.jpg" 
        },
        {
            name:"Capnea Injection 1ml",
            price:"₹246.88",
            mrp:"₹280.54",
            discount:"Save 12%",
            description: "<strong>Quantity:</strong>20gm/ml",
            manufacturer:"Cipla Ltd",
            origin: "India",
            image: "capnea_inject.jpg"
        },
        {
            name:"Capnea Oral Solution 1ml",
            price:"₹220.12",
            mrp:"₹275.15",
            discount:"Save 20%",
            description: "<strong>Quantity:</strong>20gm/ml",
            manufacturer:"Cipla Ltd",
            origin: "India",
            image: "capnea_oral_.jpg"
        },
        {
            name:"Cognistar 30mg Injection 1'S",
            price:"₹706.02",
            mrp:"₹802.30",
            discount:"Save 12%",
            description: "<strong>Quantity:</strong>30gm",
            manufacturer:"Lupin Ltd",
            origin: "India",
            image: "cognistar_inject.jpg"
        },
        {
            name:"Cogniza Tablet 10'S",
            price:"₹191.20",
            mrp:"₹239.00",
            discount:"Save 20%",
            description: "10 Tablet(s) in a Strip",
            manufacturer:"Linux Laboratories Pvt Ltd",
            origin: "India",
            image: "cogniza_10s.jpg"
        }
    ],
    Acne:
    [
        {
           name:"Acutret 10mg Capsule 10'S",
           price:"₹172.00",
           mrp:"₹215.00",
           discount:"Save 20%",         
           description:"10 Capsule(s) in a Strip",
           manufacturer:"Ipca Laboratories Ltd",
           origin:" India",
           image:"acutret_10mg.jpg",
        },
        {
           name:"BENZONIX Gel Wash 50gm",
           price:"₹139.20",
           mrp:"₹174.00",
           discount:"Save 20%",
           description:"<strong>Quantity:</strong> 50gm",
           manufacturer:"Canixa Life Sciences Pvt Ltd",
           origin:"India",
           image:"benzonix_gel.jpg",
        },
        {
            name:"CLINDAC A 1% Gel 20gm",
            price:"₹184.00",
            mrp:"₹230.00",
            discount:"Save 20%",
            description:"<strong>Quantity:</strong>20gm",
            manufacturer:"Alkem Laboratories Ltd",
            origin:"India",
            image:"clindac_a_.jpg",
         },
         {
            name:"DERIVA BPO Gel 20g",
            price:"₹399.20",
            mrp:"₹499.00",
            discount:"Save 20%",
            description:"<strong>Quantity:</strong>20g",
            manufacturer:"Glenmark Pharmaceuticals Ltd",
            origin:"India",
            image:"deriva_bpo.jpg",
         },
         {
            name:"Erytop Gel 20gm",
            price:"₹155.76",
            mrp:"₹177.00",
            discount:"Save 12%",
            description:"<strong>Quantity:</strong>20gm",
            manufacturer:"Usv Private Ltd",
            origin:"India",
            image:"erytop_gel_.jpg",
         },
         {
            name:"Glomela Cream 20gm",
            price:"₹272.80",
            mrp:"₹310.00",
            discount:"Save 12%",
            description:"<strong>Quantity:</strong>20gm",
            manufacturer:"Intas Pharmaceuticals Ltd",
            origin:"India",
            image:"glomela_.jpg",
         },
         {
            name:"Isoin 10mg Capsule 10'S",
            price:"₹213.84",
            mrp:"₹243.00",
            discount:"Save 12%",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Wallace Pharmaceuticals Ltd",
            origin:"India",
            image:"isoin_10m.jpg",
         },
         {
            name:"KITAVA ACNE BUSTER Gel 50ml",
            price:"₹418.00",
            mrp:"₹475.00",
            discount:"Save 12%",
            description:"<strong>Quantity:</strong>50ml",
            manufacturer:"Adonis Laboratories Pvt Ltd",
            origin:"India",
            image:"kitava_acne_.jpg",
         },
         {
            name:"LACNE BODY Spray 50ml",
            price:"₹424.80",
            mrp:"₹531.00",
            discount:"Save 20%",
            description:"<strong>Quantity:</strong>50ml",
            manufacturer:"La Pristine Bioceuticals Pvt Ltd",
            origin:"India",
            image:"lacne_spray.jpg",
         },
         {
            name:"Minoz Bpo Gel 15gm",
            price:"₹360.00",
            mrp:"₹450.00",
            discount:"Save 20%",
            description:"<strong>Quantity:</strong>15gm",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"minoz_bpo.jpg",
         },
         {
            name:"OBRIL Cream 20gm",
            price:"₹526.24",
            mrp:"₹598.00",
            discount:"Save 12%",
            description:"<strong>Quantity:</strong>20gm",
            manufacturer:"Brinton Pharmaceuticals Ltd",
            origin:"India",
            image:"obril_cream_.jpg",
         },
         {
            name:"Saslic Face Wash Foam 60ml",
            price:"₹319.99",
            mrp:"₹399.99",
            discount:"Save 20%",
            description:"<strong>Quantity:</strong>60ml",
            manufacturer:"Cipla Ltd",
            origin:"India",
            image:"saslic_face.jpg",
         },
    ],
    Burns:
    [
        {
            name:"BIOCOLLAZ AG Gel 10gm",
            price:"₹66.00",
            mrp:"₹75.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>10gm",
            manufacturer:"Bion Therapeutics (I) Pvt Ltd",
            origin:"India",
            image:"biocollaz_ag_gel.jpg",
        },
        {
            name:"Silverex Ionic Gel 10gm",
            price:"₹89.76",
            mrp:"₹102.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>10gm",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"silverex_ionic_.jpg",
        },
        {
            name:"SILVEZ PLUS Cream 15gm",
            price:"₹81.84",
            mrp:"₹93.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>100ml",
            manufacturer:"Laborate Pharmaceuticals India Ltd",
            origin:"India",
            image:"silvez_plus_.jpg",
        },
        {
            name:"SIMPLEX XL Cream 20gm",
            price:"₹70.40",
            mrp:"₹80.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>100ml",
            manufacturer:"Curewell Drugs & Pharmaceuticals Pvt Ltd",
            origin:"India",
            image:"simplex_xl_.jpg",
        },
    ],
    Contraception:
    [
        {
            name:"Crisanta Tablet 21'S",
            price:"₹435.62",
            mrp:"₹544.53",
            discount:"Save 20%",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Cipla Ltd",
            origin:"India",
            image:"crisanta_21s_.jpg",
        },
        {
            name:"Diane 35 Tablet 21'S",
            price:"₹400.50",
            mrp:"₹445.00",
            discount:"Save 10 %",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Bayer Zydus Pharma Pvt Ltd",
            origin:"Germany",
            image:"diane_21s_.jpg",
        },
        {
            name:"Elestra Tablet 21'S",
            price:"₹364.94",
            mrp:"₹414.70",
            discount:"Save 12 %",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Macleods Pharmaceuticals Pvt Ltd",
            origin:"India",
            image:"elestra_21.jpg",
        },
        {
            name:"Femilon Tablet 21'S",
            price:"₹263.20",
            mrp:"₹329.00",
            discount:"Save 20%",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Abbott India Ltd",
            origin:"India",
            image:"femilon_21s_.jpg",
        },
        {
            name:"Ginette 35mg Tablet 21'S",
            price:"₹347.93",
            mrp:"₹434.91",
            discount:"Save 20%",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Cipla Ltd",
            origin:"India",
            image:"ginette_35mg.jpg",
        },
        {
            name:"Harmoni F Tablet 21'S",
            price:"₹373.38",
            mrp:"₹424.30",
            discount:"Save 12 %",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Alembic Pharmaceuticals Ltd",
            origin:"India",
            image:"harmoni_f_21s_.jpg",
        },
        {
            name:"Intimacy Plus 2 Tablet 21'S",
            price:"₹136.40",
            mrp:"₹155.00",
            discount:"Save 12 %",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Aristo Pharmaceuticals Pvt Ltd",
            origin:"India",
            image:"intimacy_plus_2_.jpg",
        },
        {
            name:"Juliana Tablet 21'S",
            price:"₹225.68",
            mrp:"₹256.45",
            discount:"Save 12 %",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Zydus Healthcare Ltd",
            origin:"India",
            image:"juliana_21s_.jpg",
        },
        {
            name:"Kyrah Tablet 21'S",
            price:"₹227.56",
            mrp:"₹258.59",
            discount:"Save 12 %",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Jagsonpal Pharmaceuticals Ltd",
            origin:"India",
            image:"kyrah_21s.jpg",
        },
        {
            name:"Loette Tablet 21'S",
            price:"₹275.20",
            mrp:"₹344.00",
            discount:"Save 20%",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Pfizer Ltd",
            origin:"India",
            image:"loette_21.jpg",
        },
        {
            name:"Miliana Tablet 21'S",
            price:"₹225.68",
            mrp:"₹256.45",
            discount:"Save 12 %",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Zydus Healthcare Ltd",
            origin:"India",
            image:"miliana_21s.jpg",
        },
        {
            name:"Novelon Tablet 21'S",
            price:"₹230.40",
            mrp:"₹288.00",
            discount:"Save 20%",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Abbott India Ltd",
            origin:"India",
            image:"novelon_21s.jpg",
        },
        {
            name:"Ovral L Tablet 21'S",
            price:"₹61.18",
            mrp:"₹66.50",
            discount:"Save 8 %",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Pfizer Ltd",
            origin:"India",
            image:"ovral_l_21s.jpg",
        },
        {
            name:"Sevista 30mg Tablet 15'S",
            price:"₹124.78",
            mrp:"₹141.79",
            discount:"Save 12 %",
            description:"15 Tablet(s) in a Strip",
            manufacturer:"Torrent Pharmaceuticals Ltd",
            origin:"India",
            image:"sevista_30mg.jpg",
        },
        {
            name:"Triquilar Tablet 21'S",
            price:"₹170.19",
            mrp:"₹193.40",
            discount:"Save 12 %",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Zydus Healthcare Ltd",
            origin:"India",
            image:"triquilar_21s.jpg",
        },
        {
            name:"Uvazest 2mg Tablet 10'S",
            price:"₹349.82",
            mrp:"₹437.27",
            discount:"Save 20% off",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Eris Oaknet Healthcare Pvt Ltd",
            origin:"India",
            image:"uvazest_2mg_.jpg",
        },
        {
            name:"Yasmin Tablet 21'S",
            price:"₹537.30",
            mrp:"₹597.00",
            discount:"Save 10 %",
            description:"21 Tablet(s) in a Strip",
            manufacturer:"Bayer Zydus Pharma Pvt Ltd",
            origin:"India",
            image:"yasmin_21s.jpg",
        },
        {
            name:"Qlaira Tablet 28'S",
            price:"₹1,152.00",
            mrp:"₹1440.00",
            discount:"Save 20% off",
            description:"28 Tablet(s) in a Strip",
            manufacturer:"Bayer Zydus Pharma Pvt Ltd",
            origin:"Germany",
            image:"qlaira_28s.jpg",
        },
        {
            name:"Vovasure Tablet 28'S",
            price:"₹308.88",
            mrp:"₹351.00",
            discount:"Save 12 %",
            description:"28 Tablet(s) in a Strip",
            manufacturer:"Best Biotech",
            origin:"India",
            image:"vovasure_28s.jpg",
        },
    ],
    Diagnostic:
    [
        {
            name:"Omnipaque 350mg Infusion 100ml",
            price:"₹1314.85",
            mrp:"₹1494.15",
            discount:"Save 12 %",
            description:"",
            manufacturer:"Pfizer Ltd",
            origin:"India",
            image:"omnipaque_infusion.jpg",
        },
        {
            name:"Omnipaque 350mg Infusion 50ml",
            price:"₹645.04",
            mrp:"₹733.00",
            discount:"Save 12 %",
            description:"",
            manufacturer:"Pfizer Ltd",
            origin:"India",
            image:"omnipaque_infusion_50ml.jpg",
        },
        {
            name:"SAM MB Injection 10ml",
            price:"₹220.00",
            mrp:"₹250.00",
            discount:"Save 12 %",
            description:"",
            manufacturer:"Samarth Life Sciences Pvt Ltd",
            origin:"India",
            image:"sam_mb_inject_10ml.jpg",
        },
        {
            name:"TRYBLUE SOLUTION 1ML",
            price:"₹102.96",
            mrp:"₹117.00",
            discount:"Save 12 %",
            description:"",
            manufacturer:"Sunways (India) Pvt Ltd",
            origin:"India",
            image:"tryblue_1ml.jpg",
        },
        {
            name:"",
            price:"",
            mrp:"",
            discount:"",
            description:"",
            manufacturer:"",
            origin:"India",
            image:".jpg",
        },
    ],

    "Ear Conditions":
    [
        {
            name:"ACETIK Ear Drops 10ml",
            price:"₹146.08",
            mrp:"₹166.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>10ml",
            manufacturer:"Nulife Pharmaceuticals",
            origin:"India",
            image:"acetik_ear.jpg",
        },
        {
            name:"Biomycetin Ear Drops 5ml",
            price:"₹48.15",
            mrp:"₹53.50",
            discount:"Save 10 %",
            description:"<strong>Quantity:</strong>5ml",
            manufacturer:" Juggat Pharma",
            origin:"India",
            image:"biomycetin_ear_.jpg",
        },
        {
            name:"Candibiotic Plus Ear Drops 5ml",
            price:"₹88.88",
            mrp:"₹101.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>5ml",
            manufacturer:"Glenmark Pharmaceuticals Ltd",
            origin:"India",
            image:"candibiotic_ear_.jpg",
        },
        {
            name:"DEWAX Ear Drops 10ml",
            price:"₹124.07",
            mrp:"₹140.99",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>10ml",
            manufacturer:"Vanguard Therapeutics Pvt Ltd",
            origin:"India",
            image:"dewax_ear.jpg",
        },
        {
            name:"FOROTO EAR Drops 5ml",
            price:"₹58.50",
            mrp:"₹65.00",
            discount:"Save 10 %",
            description:"<strong>Quantity:</strong>5ml",
            manufacturer:"West Coast Pharmaceutical Works Ltd",
            origin:"India",
            image:"foroto_ear_.jpg",
        },
        {
            name:"Myclin Ear Drops 10ml",
            price:"₹30.15",
            mrp:"₹33.50",
            discount:"Save 10 %",
            description:"<strong>Quantity:</strong>10ml",
            manufacturer:"Sunways (India) Pvt Ltd",
            origin:"India",
            image:"myclin_ear_.jpg",
        },
        {
            name:"NEOSPORIN H Ear Drops 5ml",
            price:"₹81.27",
            mrp:"₹92.35",
            discount:"Save 10 %",
            description:"<strong>Quantity:</strong>5ml",
            manufacturer:"Glaxosmithkline Pharmaceuticals Ltd",
            origin:"India",
            image:"neosporin_h_ear_.jpg",
        },
        {
            name:"Otek Ac Neo Ear Drops 5ml",
            price:"₹65.34",
            mrp:"₹72.60",
            discount:"Save 10 %",
            description:"<strong>Quantity:</strong>5ml",
            manufacturer:"FDC Limited",
            origin:"India",
            image:"otek_ac_.jpg",
        },
        {
            name:"Soliwax Ear Drops 10ml",
            price:"₹150.48",
            mrp:"₹171.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>10ml",
            manufacturer:"Nulife Pharmaceuticals",
            origin:"India",
            image:"soliwax_ear_.jpg",
        },
        {
            name:"TRIBEN Ear Drops 10ml",
            price:"₹71.78",
            mrp:"₹79.75",
            discount:"Save 10 %",
            description:"<strong>Quantity:</strong>5ml",
            manufacturer:"Jenburkt Pharmaceuticals Ltd",
            origin:"India",
            image:"triben_ear_.jpg",
        },
        {
            name:"ZAPCLOTRI Ear Drops 10ml",
            price:"₹73.92",
            mrp:"₹84.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>5ml",
            manufacturer:"Doctor Wonder (P) Limited",
            origin:"India",
            image:"zapclotri_ear_.jpg",
        },
    ],
    "Epilepsy/Convulsion":
    [
        {
            name:"ABSENZ Syrup 100ml",
            price:"₹408.00",
            mrp:"₹510.00",
            discount:"Save 20%",
            description:"<strong>Quantity:</strong>100ml",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"absenz_syrup_.jpg",
        },
        {
            name:"Amvalor Chrono 200mg Tablet 10'S",
            price:"₹38.25",
            mrp:"₹42.50",
            discount:"Save 10 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Arinna Lifesciences Ltd",
            origin:"India",
            image:"amvalor_chrono_.jpg",
        },
        {
            name:"BREVIPIL 75 Tablet 10's",
            price:"₹243.20",
            mrp:"₹304.00",
            discount:"Save 20%",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"brevipil_75_.jpg",
        },
        {
            name:"BRIVASURE Oral Solution 100ml",
            price:"₹423.28",
            mrp:"₹481.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>100ml",
            manufacturer:"Alkem Laboratories Ltd",
            origin:"India",
            image:"brivasure_oral.jpg",
        },
        {
            name:"Carbanerve 300mg Tablet 10'S",
            price:"₹104.72",
            mrp:"₹119.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Linux Laboratories Pvt Ltd",
            origin:"India",
            image:"carbanerve_300mg_.jpg",
        },
        {
            name:"Celetoin ER 300mg Tablet 30'S",
            price:"₹194.26",
            mrp:"₹220.75",
            discount:"Save 12 %",
            description:"1 Tablet(s) in a Strip",
            manufacturer:"Intas Pharmaceuticals Ltd",
            origin:"India",
            image:"celetoin_er_300mg.jpg",
        },
        {
            name:"Depakote XR 250mg Tablet 15'S",
            price:"₹172.26",
            mrp:"₹195.75",
            discount:"Save 12 %",
            description:"15 Tablet(s) in a Strip",
            manufacturer:"Sanofi India Limited",
            origin:"India",
            image:"depakote_xr_250mg_.jpg",
        },
        {
            name:"Eptoin Oral Suspension 200ml",
            price:"₹67.02",
            mrp:"₹76.16",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>200ml",
            manufacturer:"Abbott India Ltd",
            origin:"India",
            image:"eptoin_oral_.jpg",
        },
        {
            name:"Fycompa 6mg Tablet 14's",
            price:"₹860.80",
            mrp:"₹1076.00",
            discount:"Save 20%",
            description:"14 Tablet(s) in a Strip",
            manufacturer:"Eisai Pharmaceuticals India Pvt Ltd",
            origin:"United Kingdom",
            image:"fycompa_6mg.jpg",
        },
        {
            name:"Gabapin 400mg Capsule 10'S",
            price:"₹260.48",
            mrp:"₹296.00",
            discount:"Save 12 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Intas Pharmaceuticals Ltd",
            origin:"India",
            image:"gabapin_400mg_.jpg",
        },
        {
            name:"I TOIN ER 300 Tablet 30's",
            price:"₹167.20",
            mrp:"₹190.00 ",
            discount:"Save 12 %",
            description:"30 Tablet(s) in a Strip",
            manufacturer:"IKON PHARMACHEM PVT LTD",
            origin:"India",
            image:"i_toin_er_300_.jpg",
        },
        {
            name:"Joseiz 50mg Tablet 10'S",
            price:"₹65.70",
            mrp:"₹73.00",
            discount:"Save 10 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"La Renon Healthcare Pvt Ltd",
            origin:"India",
            image:"joseiz_50mg_.jpg",
        },
        {
            name:"Keppra 250mg Tablet 10'S",
            price:"₹63.45",
            mrp:"₹70.50",
            discount:"Save 10 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Dr. Reddy's Laboratories Ltd",
            origin:"India",
            image:"keppra_250mg.jpg",
        },
        {
            name:"Levigress 500mg Tablet 10'S",
            price:"₹127.80",
            mrp:"₹142.00",
            discount:"Save 10 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"La Renon Healthcare Pvt Ltd",
            origin:"India",
            image:"levigress_500mg_.jpg",
        },
        {
            name:"Maxgalin 50mg Capsule 10'S",
            price:"₹103.20",
            mrp:"₹129.00",
            discount:"Save 20%",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"maxgalin_50mg.jpg",
        },
        {
            name:"NUTOP 50 Tablet 10's",
            price:"₹86.24",
            mrp:"₹98.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"IKON PHARMACHEM PVT LTD",
            origin:"India",
            image:"nutop_50_.jpg",
        },
        {
            name:"Oxetol 300mg Tablet 10'S",
            price:"₹118.40",
            mrp:"₹148.00",
            discount:"Save 20 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"oxetol_300mg.jpg",
        },
        {
            name:"PERAMPA 6 Tablet 10's",
            price:"₹190.52",
            mrp:"₹216.50",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Intas Pharmaceuticals Ltd",
            origin:"India",
            image:"perampa_6_.jpg",
        },
        {
            name:"Selzic 450mg Tablet 10'S",
            price:"₹176.98",
            mrp:"₹201.11",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Eris Lifesciences Ltd",
            origin:"India",
            image:"selzic_450mg.jpg",
        },
        {
            name:"Tegrital Suspension 100ml",
            price:"₹31.25",
            mrp:"₹34.72",
            discount:"Save 10 %",
            description:"<strong>Quantity:</strong>100ml",
            manufacturer:"Novartis India Ltd",
            origin:"India",
            image:"tegrital_suspension.jpg",
        },
        {
            name:"VALPARIN CHRONO 300 Tablet 15's",
            price:"₹81.85",
            mrp:"₹102.31",
            discount:"Save 20%",
            description:"15 Tablet(s) in a Strip",
            manufacturer:"Sanofi India Limited",
            origin:"India",
            image:"valparin_chrono_300.jpg",
        },
        {
            name:"Xbaren 150mg Tablet 10'S",
            price:"₹67.76",
            mrp:"₹77.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"La Renon Healthcare Pvt Ltd",
            origin:"India",
            image:"xbaren_150mg.jpg",
        },
        {
            name:"Zeptol 200mg Tablet 10'S",
            price:"₹15.72",
            mrp:"₹17.47",
            discount:"Save 10 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"zeptol_200mg_.jpg",
        },
    ],
    Fungal:
    [
        {
            name:"TERBOVAG 500 Tablet 7's",
            price:"₹132.00",
            mrp:"₹150.00",
            discount:"Save 12 %",
            description:"7 Tablet(s) in a Strip",
            manufacturer:"PREVEGO HEALTHCARE & RESEARCH PRIVATE LIMITED (Generics)",
            origin:"India",
            image:"terbovag_500.jpg",
        },
    ],
    
    "General-P":
    [
        {
            name:"OCERIN FORTE TABLET 10'S",
            price:"₹202.40",
            mrp:"₹230.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Bioceutics Inc",
            origin:"India",
            image:"OIP.jpg",
        },
        {
            name:"P+caRe Cervical Collar Support (A1004) (M)",
            price:"₹226.85",
            mrp:"₹349.00",
            discount:"Save 35 %",
            description:"<strong>Quantity:</strong>M size",
            manufacturer:"PR Flexmake Private Limited",
            origin:"India",
            image:"p_care_cervical_collar_support.jpg",
        },
        {
            name:"SYSTANE LID WIPE 30'S",
            price:"₹519.20",
            mrp:"₹590.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>30 wipes",
            manufacturer:"Alcon Laboratories India Pvt Ltd",
            origin:"India",
            image:"systane_lid_wipe_30s.jpg",
        },
        {
            name:"VAGESTON 300MG CAPSULE 10'S",
            price:"₹269.28",
            mrp:"₹306.00",
            discount:"Save 12 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Bayer Zydus Pharma Pvt Ltd",
            origin:"NA",
            image:"vageston_bayer.jpg",
        },
    ],
    Hyponatremia:
    [
        {
            name:"Hyponat O 15mg Tablet 10'S",
            price:"₹598.32",
            mrp:"₹747.90",
            discount:"Save 20% off",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Zydus Healthcare Ltd",
            origin:"India",
            image:"hyponat_o_15mg.jpg",
        },
        {
            name:"Natrise 30mg Tablet 4'S",
            price:"₹880.00",
            mrp:"₹1100.00",
            discount:"Save 20% off",
            description:"4 Tablet(s) in a Strip",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"natrise_30mg_4s.jpg",
        },
        {
            name:"Resodim 30mg Tablet 4'S",
            price:"₹1120.77",
            mrp:"₹1273.60",
            discount:"Save 12 %",
            description:"4 Tablet(s) in a Strip",
            manufacturer:"Lupin Ltd",
            origin:"India",
            image:"resodim_30mg_4s.jpg",
        },
        {
            name:"Tolvasca 15mg Tablet 4'S",
            price:"₹725.56",
            mrp:"₹824.50",
            discount:"Save 12 %",
            description:"4 Tablet(s) in a Strip",
            manufacturer:"Glenmark Pharmaceuticals Ltd",
            origin:"India",
            image:"tolvasca_15mg_4s.jpg",
        },
        {
            name:"VAPTAN Tablet 10's",
            price:"₹800.00",
            mrp:"₹1000.00",
            discount:"Save 20% off",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Steadfast Medishield Pvt Ltd",
            origin:"India",
            image:"vaptan_10s.jpg",
        },
        {
            name:"XEMTOLVA 15 Tablet 4's",
            price:"₹353.76",
            mrp:"₹402.00",
            discount:"Save 12 %",
            description:"4 Tablet(s) in a Strip",
            manufacturer:"XEMEX LIFE SCIENCES",
            origin:"India",
            image:"xemtolva_15_4s.jpg",
        },
    ],
    "Itching/Dry Skin":
    [
        {
            name:"FORISTAL ANTI ITCH Lotion 50ml",
            price:"₹191.84",
            mrp:"₹218.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>50ml",
            manufacturer:"Eris Oaknet Healthcare Pvt Ltd",
            origin:"India",
            image:"foristal_anti-itch_50ml.jpg",
        },
        {
            name:"ICHTHYLYN Lotion 50ml",
            price:"₹149.60",
            mrp:"₹170.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>50ml",
            manufacturer:"PRAISE PHARMA",
            origin:"India",
            image:"ichthylyn_50ml.jpg",
        },
        {
            name:"NEVLON ANTI ITCH SOFT Cream 100gm",
            price:"₹308.00",
            mrp:"₹350.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>100gm",
            manufacturer:"Klm Laboratories Pvt Ltd",
            origin:"India",
            image:"nevlon_anti_itch_100gm.jpg",
        },
        {
            name:"NITCH Cream 30gm",
            price:"₹95.04",
            mrp:"₹108.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>30gm",
            manufacturer:"Apple Therapeutics Pvt Ltd",
            origin:"India",
            image:"nitch_30gm.jpg",
        },
        {
            name:"RITCH Spray 100ml",
            price:"₹385.88",
            mrp:"₹438.50",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>100ml",
            manufacturer:"Curatio Health Care (I) Pvt Ltd",
            origin:"India",
            image:"ritch_100ml.jpg",
        },
        {
            name:"STAQUIS 2% Ointment 30g",
            price:"₹1672.00",
            mrp:"₹1900.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>30g",
            manufacturer:"Pfizer Ltd",
            origin:"United States",
            image:"staquis_2_30g.jpg",
        },
        {
            name:"UNIHYZI ANTI ITCH Lotion 100ml",
            price:"₹338.80",
            mrp:"₹385.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>100ml",
            manufacturer:"UNIZA HEALTHCARE LLP",
            origin:"India",
            image:"unihyzi_anti_itch_100ml.jpg",
        },
        {
            name:"PRUNIX Lotion 50g",
            price:"₹286.00",
            mrp:"₹325.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>50g",
            manufacturer:"Inzpera Healthsciences Ltd",
            origin:"India",
            image:"prunix_50g.jpg",
        },
        {
            name:"PRUNIX Lotion 25ml",
            price:"₹219.12",
            mrp:"₹249.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>25ml",
            manufacturer:"Inzpera Healthsciences Ltd",
            origin:"India",
            image:"prunix_25ml.jpg",
        },
    ],
    "Kidney Disease/Stones":
    [
        {
            name:"Acutrol C 400mg Tablet 15'S",
            price:"₹141.60",
            mrp:"₹177.00",
            discount:"Save 20% off",
            description:"15 Tablet(s) in a Strip",
            manufacturer:"Intas Pharmaceuticals Ltd",
            origin:"India",
            image:"acutrol_c_400mg_15s.jpg",
        },
        {
            name:"Biosev C 800mg Tablet 10'S",
            price:"₹348.48",
            mrp:"₹396.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Biocon Ltd",
            origin:"India",
            image:"biosev_800mg.jpg",
        },
        {
            name:"Citralka Liquid 200ml",
            price:"₹129.60",
            mrp:"₹162.00",
            discount:"Save 20 %",
            description:"<strong>Quantity:</strong>200ml",
            manufacturer:"Pfizer Ltd",
            origin:"India",
            image:"citralka_200ml.jpg",
        },
        {
            name:"Duo Cytra Sugar Free Mixed Fruit Flavour Oral Solution 200ml",
            price:"₹191.97",
            mrp:"₹218.15",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>200ml",
            manufacturer:"Rpg Life Sciences Ltd",
            origin:"India",
            image:"duo_cytra_oral_200ml.jpg",
        },
        {
            name:"Endovaas Granules 7gm",
            price:"₹45.90",
            mrp:"₹51.00",
            discount:"Save 10 %",
            description:"<strong>Quantity:</strong>7gm",
            manufacturer:"Nutri Synapzz Therapeutix Pvt Ltd",
            origin:"India",
            image:"endovaas_7gm.jpg",
        },
        {
            name:"Fosbait 500mg Tablet 30'S",
            price:"₹822.93",
            mrp:"₹935.15",
            discount:"Save 12 %",
            description:"30 Tablet(s) in a Strip",
            manufacturer:"Mankind Pharma Pvt Ltd",
            origin:"India",
            image:"fosbait_500mg_30s.jpg",
        },
        {
            name:"Gushout 450 Free from Sugar Orange Flavour Solution 450ml",
            price:"₹319.44",
            mrp:"₹363.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>450ml",
            manufacturer:"La Renon Healthcare Pvt Ltd",
            origin:"India",
            image:"gushout_450ml.jpg",
        },
        {
            name:"K Mac B6 Active Sugar Free Oral Solution 200ml",
            price:"₹192.72",
            mrp:"₹219.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>200ml",
            manufacturer:"Fourrts India Laboratories Pvt Ltd",
            origin:"India",
            image:"k_mac_b6_oral_200ml.jpg",
        },
        {
            name:"LITHOTRIPS B6 Oral Suspension 200ml",
            price:"₹211.20",
            mrp:"₹240.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>200ml",
            manufacturer:"PPP PHARMACEUTICALS",
            origin:"India",
            image:"lithotrips_b6_oral_200ml.jpg",
        },
        {
            name:"Magstone B6 SUGAR FREE PINEAPPLE FLAVOUR ORAL SOLUTION 200ml",
            price:"₹207.68",
            mrp:"₹236.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>200ml",
            manufacturer:"MEYER ORGANICS PVT LTD",
            origin:"India",
            image:"magstone_b6_oral_200ml.jpg",
        },
        {
            name:"Nefrosave Forte Tablet 15'S",
            price:"₹319.20",
            mrp:"₹399.00",
            discount:"Save 20 %",
            description:"15 Tablet(s) in a Strip",
            manufacturer:"Fourrts India Laboratories Pvt Ltd",
            origin:"India",
            image:"nefrosave_forte_15s.jpg",
        },
        {
            name:"Oricitral Syrup 100ml ",
            price:"₹75.50",
            mrp:"₹85.80",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>100ml",
            manufacturer:"Ttk Healthcare Ltd",
            origin:"India",
            image:"oricitral_100ml.jpg",
        },
        {
            name:"Potrate Mb6 Free from Sugar Orange Flavour Solution 200ml",
            price:"₹236.06",
            mrp:"₹268.25",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>200ml",
            manufacturer:"Intas Pharmaceuticals Ltd",
            origin:"India",
            image:"potrate_mb6_200ml.jpg",
        },
        {
            name:"Renolog DS Tablet 10'S",
            price:"₹619.52",
            mrp:"₹704.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"La Renon Healthcare Pvt Ltd",
            origin:"India",
            image:"renolog_ds_10s.jpg",
        },
        {
            name:"Sevcar 800mg Tablet 10'S",
            price:"₹564.83",
            mrp:"₹641.85",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Emcure Pharmaceuticals Ltd",
            origin:"India",
            image:"sevcar_800mg_10s.jpg",
        },
        {
            name:"URIKIND KM SUGAR FREE Suspension 100ml",
            price:"₹162.80",
            mrp:"₹185.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>100ml",
            manufacturer:"Mankind Pharma Pvt Ltd",
            origin:"India",
            image:"urikind_km_100ml.jpg",
        },
    ],
    Leprosy:
    [
        {
            name:"Dapsone 100mg Tablet 1000'S",
            price:"₹344.40",
            mrp:"₹430.50",
            discount:"Save 20% off",
            description:"1000 Tablet(s) in a Bottle",
            manufacturer:"Glaxosmithkline Pharmaceuticals Ltd",
            origin:"India",
            image:"dapsone_100mg_1000s.jpg",
        },
        {
            name:"Hansepran 100mg Capsule 10'S",
            price:"₹37.61",
            mrp:"₹41.79",
            discount:"Save 10 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Abbott Healthcare Pvt Ltd",
            origin:"India",
            image:"hansepran_100mg_10s.jpg",
        },
        {
            name:"Hansepran 50mg Capsule 10'S",
            price:"₹19.94",
            mrp:"₹22.15",
            discount:"Save 10 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Abbott Healthcare Pvt Ltd",
            origin:"India",
            image:"hansepran_50mg_10s.jpg",
        },
    ],
    "Multiple Sclerosis":
    [
        {
            name:"Dalstep 10mg Tablet 10'S",
            price:"₹417.60",
            mrp:"₹522.00",
            discount:"Save 20% off",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"dalstep_10mg_10s.jpg",
        },
        {
            name:"DENOPSY 14 Tablet 10's",
            price:"₹1005.84",
            mrp:"₹1143.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Natco Pharma Ltd",
            origin:"India",
            image:"denopsy_14_10s.jpg",
        },
        {
            name:"MS 120mg Capsule 14'S",
            price:"₹338.80",
            mrp:"₹385.00",
            discount:"Save 12 %",
            description:"14 Capsule(s) in a Strip",
            manufacturer:"Msn Laboratories Pvt Ltd",
            origin:"India",
            image:"ms_120mg_14s.jpg",
        },
        {
            name:"SCLERIFUMA 240mg Capsule 10's",
            price:"₹482.40",
            mrp:"₹603.00",
            discount:"Save 20% ",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"sclerifuma_240mg_10s.jpg",
        },
        {
            name:"SCLERIFUMA 120 Capsule 10's",
            price:"₹313.28",
            mrp:"₹356.00",
            discount:"Save 12 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"sclerifuma_120_10s.jpg",
        },
        {
            name:"Scleteri 14mg Tablet 10'S",
            price:"₹1101.76",
            mrp:"₹1252.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"scleteri_14mg_10s.jpg",
        },
        {
            name:"Teru MS 14mg Tablet 10'S",
            price:"₹1,096.80",
            mrp:"₹1371.00",
            discount:"Save 20%",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Msn Laboratories Pvt Ltd",
            origin:"India",
            image:"teru_ms_14mg_10s.jpg",
        },
        {
            name:"Teru MS 7mg Tablet 10'S",
            price:"₹605.60",
            mrp:"₹757.00",
            discount:"Save 20%",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Msn Laboratories Pvt Ltd",
            origin:"India",
            image:"teru_ms_7mg_10s.jpg",
        },
    ],
    "Nappy Rash":
    [
        {
            name:"Happynap Cream 20gm",
            price:"₹118.10",
            mrp:"₹134.20",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>20gm",
            manufacturer:"Apex Laboratories Pvt Ltd",
            origin:"India",
            image:"happynap_20gm.jpg",
        },
        {
            name:"RASHFREE Cream 30gm",
            price:"₹222.89",
            mrp:"₹253.28",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>30gm",
            manufacturer:"Abbott Healthcare Pvt Ltd",
            origin:"India",
            image:"rashfree_30gm.jpg",
        },
        {
            name:"Siloderm Cream 20gm",
            price:"₹88.44",
            mrp:"₹100.50",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>20gm",
            manufacturer:"Usv Private Ltd",
            origin:"India",
            image:"siloderm_20gm.jpg",
        },
        {
            name:"SOFIRASH Cream 30gm",
            price:"₹132.00",
            mrp:"₹150.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>30gm",
            manufacturer:"Klm Laboratories Pvt Ltd",
            origin:"India",
            image:"sofirash_30gm.jpg",
        },
        {
            name:"HAPPYNAP Cream 30gm",
            price:"₹150.48",
            mrp:"₹171.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>30gm",
            manufacturer:"Apex Laboratories Pvt Ltd",
            origin:"India",
            image:"happynap_30gm.jpg",
        },
    ],
    Obesity:
    [
        {
            name:"Kilfat Tablet 10'S",
            price:"₹423.28",
            mrp:"₹481.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Akumentis Healthcare Ltd",
            origin:"India",
            image:"kilfat_10s.jpg",
        },
        {
            name:"LIPOCUT 120mg Capsule 10'S",
            price:"₹666.92",
            mrp:"₹833.65",
            discount:"Save 20% ",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Lupin Ltd",
            origin:"India",
            image:"lipocut_120mg_10s.jpg",
        },
        {
            name:"Megaburn 120mg Capsule 10'S",
            price:"₹440.00",
            mrp:"₹550.00",
            discount:"Save 20%",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Leeford Healthcare Ltd (Generics)",
            origin:"India",
            image:"megaburn_120mg_10s.jpg",
        },
        {
            name:"Obelit 120mg Capsule 10'S",
            price:"₹708.40",
            mrp:"₹885.50",
            discount:"Save 20 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Intas Pharmaceuticals Ltd",
            origin:"India",
            image:"obelit_120mg_10s.jpg",
        },
        {
            name:"Reeshape 120mg Capsule 15'S",
            price:"₹748.00",
            mrp:"₹935.00",
            discount:"Save 20 %",
            description:"15 Capsule(s) in a Strip",
            manufacturer:"MEYER ORGANICS PVT LTD",
            origin:"India",
            image:"reeshape_120mg_15s.jpg",
        },
        {
            name:"Vyfat 120mg Capsule 10'S",
            price:"₹649.44",
            mrp:"₹738.00",
            discount:"Save 12 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Intas Pharmaceuticals Ltd",
            origin:"India",
            image:"vyfat_120mg_10s.jpg",
        },
    ],
    Psoriasis:
    [
        {
            name:"K SHINE Soap 75gm",
            price:"₹113.52",
            mrp:"₹129.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>75gm",
            manufacturer:"Inex Medicaments Pvt Ltd",
            origin:"India",
            image:"k_shine_75gm.jpg",
        },
        {
            name:"PIGOLYN Cream 20gm",
            price:"₹105.60",
            mrp:"₹120.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>20gm",
            manufacturer:"PRAISE PHARMA",
            origin:"India",
            image:"pigolyn_20gm.jpg",
        },
        {
            name:"TARSHINE Soap 75gm",
            price:"₹88.00",
            mrp:"₹100.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>75gm",
            manufacturer:"KAIZEN RESEARCH LABS INDIA PVT LTD",
            origin:"India",
            image:"tarshine_75gm.jpg",
        },
        {
            name:"TRUSTRETIN 10 Capsule 10's",
            price:"₹316.80",
            mrp:"₹396.00",
            discount:"",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Usv Private Ltd",
            origin:"India",
            image:"TRUSTRETIN_10s.jpg",
        },
        {
            name:"XALIDERM Solution 50ml",
            price:"₹308.00",
            mrp:"₹350.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>50ml",
            manufacturer:"Klm Laboratories Pvt Ltd",
            origin:"India",
            image:"xaliderm_50ml.jpg",
        },
    ],
    "Rheumatoid Arthritis":
    [
        {
            name:"AZTOFA XR Tablet 10's",
            price:"₹760.00",
            mrp:"₹950.00",
            discount:"Save 20 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Sun Pharmaceutical Industries Ltd",
            origin:"India",
            image:"aztofa_xr_10s.jpg",
        },
        {
            name:"Cilamin 250mg Capsule 10'S",
            price:"₹130.06",
            mrp:"₹162.57",
            discount:"Save 20 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Mankind Pharma Pvt Ltd",
            origin:"India",
            image:"cilamin_250mg_10s.jpg",
        },
        {
            name:"INTAJAC Tablet 10's",
            price:"₹266.40",
            mrp:"₹333.00",
            discount:"Save 20%",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Intas Pharmaceuticals Ltd",
            origin:"India",
            image:"intajac_10s.jpg",
        },
        {
            name:"JAKMAC Tablet 10's",
            price:"₹176.00",
            mrp:"₹200.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Macleods Pharmaceuticals Pvt Ltd",
            origin:"India",
            image:"jakmac_10s.jpg",
        },
        {
            name:"LEFLAR 10 Tablet 10's",
            price:"₹96.80",
            mrp:"₹121.00",
            discount:"Save 20 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"TAS MED INDIA PVT LTD",
            origin:"India",
            image:"leflar_10s.jpg",
        },
        {
            name:"REJOINT UC + GLUTEN FREE Tablet 10's",
            price:"₹851.20",
            mrp:"₹1064.00",
            discount:"Save 20 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Abbott Healthcare Pvt Ltd",
            origin:"India",
            image:"rejoint_uc_10s.jpg",
        },
        {
            name:"TOFASHINE XR 11 Tablet 10's",
            price:"₹760.00",
            mrp:"₹950.00",
            discount:"Save 20 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Sun Pharma Laboratories Ltd",
            origin:"India",
            image:"tofashine_xr_11_10s.jpg",
        },
        {
            name:"XEMTOF 5 Tablet 10's",
            price:"₹250.80",
            mrp:"₹285.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Xemex Pharmaceuticals Private Limited",
            origin:"India",
            image:"xemtof_5_10s.jpg",
        },
        {
            name:"ZOJOINT Capsule 10's",
            price:"₹148.72",
            mrp:"₹169.00",
            discount:"Save 12 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Zorilla Life Science Private Limited",
            origin:"India",
            image:"zojoint_10s.jpg",
        },
    ],
    "Smoking cessation":
    [
        {
            name:"2baconil Icy Mint 4 mg Chew Gum 10's",
            price:"₹69.04",
            mrp:"₹86.30",
            discount:"Save 20 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Rusan Health Care Pvt Ltd",
            origin:"India",
            image:"2baconil_4mg_10s.jpg",
        },
        {
            name:"Nicogum 4 Sugar Free Freshmint Flavoured Chew Gum 10's",
            price:"₹110.48",
            mrp:"₹125.55",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Cipla Ltd",
            origin:"India",
            image:"nicogum_4_10s.jpg",
        },
        {
            name:"NIXIT 4 FROST MINT FLAVOUR SUGAR FREE Lozenges 10's",
            price:"₹88.00",
            mrp:"₹100.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Strides Consumer Health Pvt Ltd",
            origin:"India",
            image:"nixit_4_10s.jpg",
        },
        {
            name:"NICOGUM 4 SUGAR FREE FRESHMINT FLAVOURED Chew Gum 12's",
            price:"₹132.00",
            mrp:"₹150.00",
            discount:"Save 12 %",
            description:"12 Tablet(s) in a Strip",
            manufacturer:"Cipla Ltd",
            origin:"India",
            image:"nicogum_4_12s.jpg",
        },
        {
            name:"NICOGUM FRESHMINT SUGAR FREE 2 Gum 12's",
            price:"₹108.90",
            mrp:"₹121.00",
            discount:"Save 10 %",
            description:"12 Tablet(s) in a Strip",
            manufacturer:"Cipla Ltd",
            origin:"India",
            image:"nicogum_12s.jpg",
        },
        {
            name:"NICOTEX CINNAMON FLAVOUR SUGAR FREE 4mg Chew Gum 12's",
            price:"₹120.00",
            mrp:"₹150.00",
            discount:"Save 20 %",
            description:"12 Tablet(s) in a Strip",
            manufacturer:"Cipla Ltd",
            origin:"India",
            image:"nicotex_12s.jpg",
        },
        {
            name:"NICOTEX MINT PLUS FLAVOUR SUGAR FREE GUMS 4mg Tablet 12's",
            price:"₹120.00",
            mrp:"₹150.00",
            discount:"Save 20 %",
            description:"12 Tablet(s) in a Strip",
            manufacturer:"CIPLA HEALTH LTD",
            origin:"India",
            image:"nicotex_4mg_12s.jpg",
        },
        {
            name:"NICOTEX MINT PLUS FLAVOUR SUGAR FREE GUMS 4mg Tablet 29's",
            price:"₹278.40",
            mrp:"₹348.00",
            discount:"Save 20 %",
            description:"29 Tablet(s) in a Strip",
            manufacturer:"CIPLA HEALTH LTD",
            origin:"India",
            image:"nicotex_4mg_29s.jpg",
        },
        {
            name:"NICOTEX PAAN FLAVOUR SUGAR FREE GUMS 4mg Tablet 12's",
            price:"₹120.00",
            mrp:"₹150.00",
            discount:"Save 20 %",
            description:"12 Tablet(s) in a Strip",
            manufacturer:"CIPLA HEALTH LTD",
            origin:"India",
            image:"nicotex_paan_4mg_12s.jpg",
        },
    ],
    Tetanus:
    [
        {
            name:"Similia Trituration Cuprum Ars. 6X Tablet 450 gm",
            price:"₹459.25",
            mrp:"₹835.00",
            discount:"Save 45 %",
            description:"<strong>Quantity:</strong>450gm",
            manufacturer:"Similia Homoeo Laboratory",
            origin:"India",
            image:"similia_50gm.jpg",
        },
    ],
    "Thrombotic Disorder":
    [
        {
            name:"Nicerbium 30mg Tablet 10'S",
            price:"₹563.20",
            mrp:"₹704.00",
            discount:"Save 20 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Micro Labs Ltd",
            origin:"India",
            image:"nicerbium_30mg_10s.jpg",
        },
    ],
    "Uti Infections":
    [
        {
            name:"CITAL SUGAR FREE Liquid 200ml",
            price:"₹149.38",
            mrp:"₹169.75",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>200ml",
            manufacturer:"Indoco Remedies Ltd",
            origin:"India",
            image:"cital_200ml.jpg",
        },
        {
            name:"CRANTOP Sachet 5gm",
            price:"₹40.50",
            mrp:"₹45.00",
            discount:"Save 10 %",
            description:"<strong>Quantity:</strong>5gm",
            manufacturer:"Zycris Healthcare",
            origin:"India",
            image:"crantop_5gm.jpg",
        },
        {
            name:"Cranbe Capsule 10'S",
            price:"₹199.20",
            mrp:"₹249.00",
            discount:"Save 20 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"Torrent Pharmaceuticals Ltd",
            origin:"India",
            image:"cranbe_10s.jpg",
        },
        {
            name:"SHECRETT Capsule 10's",
            price:"₹219.99",
            mrp:"₹249.99",
            discount:"Save 12 %",
            description:"10 Capsule(s) in a Strip",
            manufacturer:"LeeWell Pharmaceutical Pvt Ltd",
            origin:"India",
            image:"shecrett_10s.jpg",
        },
        {
            name:"SHECRETT P Tablet 10's",
            price:"₹257.84",
            mrp:"₹293.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"LeeWell Pharmaceutical Pvt Ltd",
            origin:"India",
            image:"shecrett_p_10s.jpg",
        },
        {
            name:"URISTREAM Sachet 5g",
            price:"₹40.00",
            mrp:"₹50.00",
            discount:"Save 20 %",
            description:"<strong>Quantity:</strong>5g",
            manufacturer:"TAS MED INDIA PVT LTD",
            origin:"India",
            image:"URISTREAM_Sachet_5g.jpg",
        },
        {
            name:"UTIBERRY Tablet 10's",
            price:"₹319.20",
            mrp:"₹399.00",
            discount:"Save 20 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Triton Health Care Pvt Ltd",
            origin:"India",
            image:"utiberry_10s.jpg",
        },
    ],
    Vitiligo:
    [
        
        {
            name:"GLENDEP Solution 5ml",
            price:"₹600.00",
            mrp:"₹750.00",
            discount:"Save 20 %",
            description:"<strong>Quantity:</strong>5ml",
            manufacturer:"Glenmark Pharmaceuticals Ltd",
            origin:"India",
            image:"glendep_5ml.jpg",
        },
        {
            name:"Melbild Solution 2ml",
            price:"₹492.80",
            mrp:"₹560.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>2ml",
            manufacturer:"Alkem Laboratories Ltd",
            origin:"India",
            image:"melbild_2ml.jpg",
        },
        {
            name:"Melbild XL Solution 10ml",
            price:"₹1,248.00",
            mrp:"₹1560.00",
            discount:"Save 20 %",
            description:"<strong>Quantity:</strong>10ml",
            manufacturer:"Alkem Laboratories Ltd",
            origin:"India",
            image:"melbild_xl_10ml.jpg",
        },
        {
            name:"MELBOOST Solution 2ml",
            price:"₹453.20",
            mrp:"₹515.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>2ml",
            manufacturer:"Klm Laboratories Pvt Ltd",
            origin:"India",
            image:"melboost_2ml.jpg",
        },
        {
            name:"Melgain Lotion 2ml",
            price:"₹475.20",
            mrp:"₹540.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>2ml",
            manufacturer:"Zydus Healthcare Ltd",
            origin:"India",
            image:"melgain_2ml.jpg",
        },
        {
            name:"MELTIDE Solution 5ml",
            price:"₹809.60",
            mrp:"₹920.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>5ml",
            manufacturer:"Hbc Lifesciences Pvt Ltd",
            origin:"India",
            image:"meltide_5ml.jpg",
        },
        {
            name:"MHG Lotion 6ml",
            price:"₹752.00",
            mrp:"₹940.00",
            discount:"Save 20 %",
            description:"<strong>Quantity:</strong>6ml",
            manufacturer:"Canixa Life Sciences Pvt Ltd",
            origin:"India",
            image:"mhg_6ml.jpg",
        },
        {
            name:"VITINEXT PLUS Tablet 10's",
            price:"₹132.00",
            mrp:"₹150.00",
            discount:"Save 12 %",
            description:"10 Tablet(s) in a Strip",
            manufacturer:"Ethinext Pharma Pvt Ltd",
            origin:"India",
            image:"vitinext_10s.jpg",
        },
    ],
    "Warts/Calluses/Other Skin Lesion":
    [
        {
            name:"CORNEX Corn Caps 4's",
            price:"₹36.00",
            mrp:"₹40.00",
            discount:"Save 10 %",
            description:"4 Strip(s)",
            manufacturer:"Leeford Healthcare Ltd (Generics)",
            origin:"India",
            image:"cornex_4s.jpg",
        },
        {
            name:"Dersol 40% Ointment 25gm",
            price:"₹129.89",
            mrp:"₹147.60",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>25gm",
            manufacturer:"East West Pharma",
            origin:"India",
            image:"dersol_40_25gm.jpg",
        },
        {
            name:"Dersol L Solution 15ml",
            price:"₹187.79",
            mrp:"₹213.40",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>15ml",
            manufacturer:"East West Pharma",
            origin:"India",
            image:"dersol_l_15ml.jpg",
        },
        {
            name:"EPIWART Solution 15ml",
            price:"₹200.00",
            mrp:"₹250.00",
            discount:"Save 20 %",
            description:"<strong>Quantity:</strong>15ml",
            manufacturer:"Prism Life Sciences Ltd",
            origin:"India",
            image:"epiwart_15ml.jpg",
        },
        {
            name:"Imiquad 12.5mg Cream 3X0.25gm",
            price:"₹360.00",
            mrp:"₹450.00",
            discount:"Save 20 %",
            description:"3 Sachet(s) in a Pack",
            manufacturer:"Glenmark Pharmaceuticals Ltd",
            origin:"India",
            image:"imiquad_12_25gm.jpg",
        },
        {
            name:"Keralin Ointment 15gm",
            price:"₹105.60",
            mrp:"₹120.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>15gm",
            manufacturer:"East India Pharmaceutical Works Ltd",
            origin:"India",
            image:"keralin_15gm.jpg",
        },
        {
            name:"Podowart S Paint 10ml",
            price:"₹255.20",
            mrp:"₹290.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>10ml",
            manufacturer:"Menarini India Pvt Ltd",
            origin:"India",
            image:"podowart_s_10ml.jpg",
        },
        {
            name:"SALICURE 12% OINTMENT 30GM",
            price:"₹131.91",
            mrp:"₹149.90",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>30g",
            manufacturer:"Curatio Health Care (I) Pvt Ltd",
            origin:"India",
            image:"salicure_12_30gm.jpg",
        },
        {
            name:"WATNIL Solution 10ml",
            price:"₹231.44",
            mrp:"₹263.00",
            discount:"Save 12 %",
            description:"<strong>Quantity:</strong>10ml",
            manufacturer:"Apple Therapeutics Pvt Ltd",
            origin:"India",
            image:"watnil_10ml.jpg",
        },
        {
            name:"",
            price:"",
            mrp:"",
            discount:"",
            description:"",
            manufacturer:"",
            origin:"India",
            image:".jpg",
        },
        {
            name:"",
            price:"",
            mrp:"",
            discount:"",
            description:"",
            manufacturer:"",
            origin:"India",
            image:".jpg",
        },
        {
            name:"",
            price:"",
            mrp:"",
            discount:"",
            description:"",
            manufacturer:"",
            origin:"India",
            image:".jpg",
        },
    ],

    // Continue with more drugs for other diseases
};// Function to filter and display diseases by letter
function filterDiseases(letter) {
    const diseaseList = document.getElementById("disease-list");
    diseaseList.innerHTML = ""; // Clear previous results
    document.getElementById("drug-list").style.display = "none";
    document.getElementById("disease-info").style.display = "none";

    if (diseases[letter]) {
        diseases[letter].forEach(disease => {
            const diseaseCard = document.createElement("div");
            diseaseCard.className = "item-card";
            diseaseCard.innerText = disease;
            diseaseCard.onclick = () => showDrugs(disease);
            diseaseList.appendChild(diseaseCard);
        });
    } else {
        diseaseList.innerHTML = `<p>No diseases found for ${letter}</p>`;
    }
}

// Function to show drugs and disease information
function showDrugs(disease) {
    const drugList = document.getElementById("drug-list");
    const drugListContent = document.getElementById("drug-list-content");
    const selectedDisease = document.getElementById("selected-disease");
    const diseaseInfoSection = document.getElementById("disease-info");

    // Hide disease list and show drug list
    document.getElementById("disease-list").style.display = "none";
    drugList.style.display = "block";
    selectedDisease.innerText = `Drugs for ${disease}`;
    drugListContent.innerHTML = ""; // Clear previous drugs

    // Display disease information
    if (diseaseInfo[disease]) {
        diseaseInfoSection.style.display = "block";
        diseaseInfoSection.innerHTML = `
            <h3>${disease}</h3>
            <p><strong>Description:</strong> ${diseaseInfo[disease].description}</p>
            <p><strong>Symptoms:</strong> ${diseaseInfo[disease].symptoms}</p>
            <p><strong>Treatment:</strong> ${diseaseInfo[disease].treatment}</p>
        `;
    } else {
        diseaseInfoSection.style.display = "none";
    }

    // Display drugs for the selected disease
    if (drugs[disease] && drugs[disease].length > 0) {
        drugs[disease].forEach(drug => {
            const drugCard = document.createElement("div");
            drugCard.className = "item-card";
            drugCard.innerHTML = `
                <p>${drug.name}</p>
                <button onclick="showDrugDetails(${JSON.stringify(drug).replace(/"/g, '&quot;')})">View Details</button>
            `;
            drugListContent.appendChild(drugCard);
        });
    } else {
        drugListContent.innerHTML = `<p>No drugs found for ${disease}</p>`;
    }
}

// Function to show detailed information for a selected drug
function showDrugDetails(drug) {
    const drugDetails = document.getElementById("drug-details");
    const drugListContent = document.getElementById("drug-list-content");

    // Hide the drug list and display drug details
    drugListContent.style.display = "none";
    drugDetails.style.display = "block";

    drugDetails.innerHTML = `
        <img src="${drug.image}" alt="${drug.name}" class="drug-image" onerror="this.onerror=null; this.src='images/default_image.jpg';">
        <h3>${drug.name}</h3>
        <p><strong>Price:</strong> ${drug.price} <span class="mrp">MRP: ${drug.mrp}</span> <span class="discount">${drug.discount}</span></p>
        <p>${drug.description}</p>
        <p><strong>Manufacturer:</strong> ${drug.manufacturer}</p>
        <p><strong>Country of Origin:</strong> ${drug.origin}</p>
        <button onclick="addToCart(${JSON.stringify(drug).replace(/"/g, '&quot;')})">Add to Cart</button>
        <button onclick="closeDrugDetails()">Back to Medicines</button>
    `;
}

// Function to close the drug details view and return to the drug list
function closeDrugDetails() {
    const drugDetails = document.getElementById("drug-details");
    const drugListContent = document.getElementById("drug-list-content");

    drugDetails.style.display = "none";
    drugListContent.style.display = "flex";
}

// Function to go back to the disease list
function goBack() {
    document.getElementById("drug-list").style.display = "none";
    document.getElementById("disease-list").style.display = "flex";
    document.getElementById("disease-info").style.display = "none";
}

// Function to add a drug to the cart (placeholder)
function addToCart(drug) {
    alert(`${drug.name} added to cart!`);
}

// Initialize with letter 'F' for demonstration
//filterDiseases('F');