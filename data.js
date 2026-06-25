const medicineDB = {
  categories: [
    {
      id: 1,
      name: { ur: "زخم اور چوٹیں", en: "Injuries", roman: "Zakhm aur Chotein" },
      icon: "🤕",
      conditions: [
        {
          name: { ur: "پٹھوں کی چوٹ", en: "Muscular Injury", roman: "Pathiyon ki Chot" },
          medicines: ["Arn", "Bellis", "R.Tox", "Ruta", "Calend", "Conium"]
        },
        {
          name: { ur: "ہڈی کی چوٹ", en: "Bone Injury", roman: "Haddi ki Chot" },
          medicines: ["Arn", "Dios", "Aur", "Ruta", "C.Phos", "Symphytum"]
        },
        {
          name: { ur: "نس کی چوٹ", en: "Nerve Injury", roman: "Nas ki Chot" },
          medicines: ["Arn", "Hyper", "Mag.Phos", "Thall", "Veratrum"]
        },
        {
          name: { ur: "غدود کی چوٹ", en: "Gland Injury", roman: "Ghudad ki Chot" },
          medicines: ["Arn", "Bellis", "Conium", "Aur"]
        },
        {
          name: { ur: "سر کی چوٹ", en: "Head Injury", roman: "Sar ki Chot" },
          medicines: ["Arn", "Opium", "Nat Sulph", "Heleb", "Hyper"]
        },
        {
          name: { ur: "ناقابل برداشت درد", en: "Unbearable Pain", roman: "Naqabil Bardasht Dard" },
          medicines: ["Aur", "Cham", "Coffea", "Hepar", "Hyper", "Lach"]
        },
        {
          name: { ur: "خون کی نالی کی چوٹ", en: "Blood Vessel Injury", roman: "Khoon ki Nali ki Chot" },
          medicines: ["Arn", "Ham", "Millif", "Hyper", "Phos"]
        },
        {
          name: { ur: "سرجری کی چوٹ", en: "Surgical Injury", roman: "Surgery ki Chot" },
          medicines: ["Arn", "Staph", "Strontium Carb"]
        },
        {
          name: { ur: "سوئی کا زخم", en: "Needle Prick", roman: "Sui ka Zakhm" },
          medicines: ["Ledum", "Hypericum"]
        },
        {
          name: { ur: "گردن کا درد", en: "Neck Pain", roman: "Gardan ka Dard" },
          medicines: ["Lachnanthes", "Rhus Tox"]
        },
        {
          name: { ur: "پسلی کا درد", en: "Ribs Pain", roman: "Pasli ka Dard" },
          medicines: ["Ranunculus Bulbosus", "Arnica", "Bryonia", "Rhus Tox"]
        }
      ]
    },
    {
      id: 2,
      name: { ur: "درد کا طریقہ", en: "Modality of Pain", roman: "Dard ka Tareeqa" },
      icon: "⏰",
      conditions: [
        {
          name: { ur: "اچانک شروع ہو", en: "Sudden Onset", roman: "Achanak Shuru Ho" },
          medicines: ["Aco", "Bell", "Calc", "Acid Nit", "Spig"]
        },
        {
          name: { ur: "اچانک شروع، اچانک ختم", en: "Sudden Start, Sudden End", roman: "Achanak Shuru, Achanak Khatam" },
          medicines: ["Bella", "Kali Bich", "Acid Nit"]
        },
        {
          name: { ur: "آرام سے بڑھتا ہو", en: "Worse by Rest", roman: "Aaram se Barhta" },
          medicines: ["R.Tox", "Rhodo", "Ruta", "C.Fluor"]
        },
        {
          name: { ur: "آرام سے کم ہو", en: "Better by Rest", roman: "Aaram se Kam" },
          medicines: ["Bryonia"]
        },
        {
          name: { ur: "حرکت سے بڑھتا ہو", en: "Worse by Motion", roman: "Harkat se Barhta" },
          medicines: ["Bryon", "Colchi", "Arn-Mur"]
        },
        {
          name: { ur: "رات میں بڑھتا ہو", en: "Worse at Night", roman: "Raat mein Barhta" },
          medicines: ["Syphilinum", "Aur", "M.Sol", "Acid Nit"]
        },
        {
          name: { ur: "گرمی سے بڑھتا ہو", en: "Worse by Heat", roman: "Garmi se Barhta" },
          medicines: ["Phos", "Sulph", "Lach", "N.Carb"]
        },
        {
          name: { ur: "گرمی سے کم ہو", en: "Better by Heat", roman: "Garmi se Kam" },
          medicines: ["Calc", "Mag.Phos", "Silic", "R.Tox", "Nux"]
        }
      ]
    },
    {
      id: 3,
      name: { ur: "سر درد", en: "Headache", roman: "Sar Dard" },
      icon: "🤯",
      conditions: [
        {
          name: { ur: "مائیگرین", en: "Migraine", roman: "Migraine" },
          medicines: ["Alumina", "Ars", "Cedron", "China", "Nat Mur", "Acid Nit", "Sang", "Sepia", "Silicea"]
        },
        {
          name: { ur: "بائیں طرف مائیگرین", en: "Left Side Migraine", roman: "Baen Taraf Migraine" },
          medicines: ["Lach", "Sepia", "Spig", "Brom"]
        },
        {
          name: { ur: "دائیں طرف مائیگرین", en: "Right Side Migraine", roman: "Dayen Taraf Migraine" },
          medicines: ["Bella", "Sang", "Sepia", "Ign", "Iris"]
        },
        {
          name: { ur: "بچوں کا سر درد", en: "School Going Headache", roman: "Bachon ka Sar Dard" },
          medicines: ["C.Phos", "Nat Mur", "Acid Phos", "Gels", "K.Phos", "Ruta"]
        },
        {
          name: { ur: "ڈر سے سر درد", en: "Anticipation Headache", roman: "Dar se Sar Dard" },
          medicines: ["Gels", "Arg Nit"]
        },
        {
          name: { ur: "دھوپ سے سر درد", en: "Sun Stroke Headache", roman: "Dhoop se Sar Dard" },
          medicines: ["Bella", "Nat Carb", "Gilon", "Nat Mur", "Amyl-Nit", "Lach"]
        },
        {
          name: { ur: "سائنسائٹس سے سر درد", en: "Sinusitis Headache", roman: "Sinusitis se Sar Dard" },
          medicines: ["Tuber", "Medo", "Carci", "Silicea", "Iod", "Hepar", "Am-Carb"]
        },
        {
          name: { ur: "چوٹ سے سر درد", en: "Injury Headache", roman: "Chot se Sar Dard" },
          medicines: ["Arnica", "Hyper", "Nat Sulph", "R.Tox", "Aur"]
        },
        {
          name: { ur: "بلڈ پریشر سے سر درد", en: "Hypertension Headache", roman: "Blood Pressure se Sar Dard" },
          medicines: ["Bell", "Gilon", "Lach", "Spig", "Gels", "Bryonia"]
        },
        {
          name: { ur: "بخار سے سر درد", en: "Fever Headache", roman: "Bukhar se Sar Dard" },
          medicines: ["Bella", "Bry", "Gels", "Ars", "R.Tox", "China", "Eupatorium Perf", "Nat Mur", "Silicea"]
        },
        {
          name: { ur: "غم سے سر درد", en: "Grief Headache", roman: "Gham se Sar Dard" },
          medicines: ["Ign", "Nat Mur", "Acid Phos", "Aur", "Gels"]
        }
      ]
    },
    {
      id: 4,
      name: { ur: "سینے کا درد", en: "Chest Pain", roman: "Seene ka Dard" },
      icon: "💔",
      conditions: [
        {
          name: { ur: "پٹھوں کا کھنچاؤ", en: "Muscles Strain", roman: "Pathiyon ka Khanchnao" },
          medicines: ["Arn", "Rhus Tox", "Bry", "Ranun Bulb"]
        },
        {
          name: { ur: "پسلی کا زخم", en: "Injured Ribs", roman: "Pasli ka Zakhm" },
          medicines: ["Arn", "Rhus Tox", "Symphytum", "Aurum", "C.Phos", "Bellis Per", "Hyper", "Ruta"]
        },
        {
          name: { ur: "پیٹک السر", en: "Peptic Ulcers", roman: "Peptic Ulcer" },
          medicines: ["Nux", "Hepar", "Puls", "Abies Nig", "Iris Ver", "Nat Phos", "Nat Sulph", "Phos", "K.Bich", "Bismuth"]
        },
        {
          name: { ur: "ایسڈٹی (GERD)", en: "GERD Acid", roman: "Acidity GERD" },
          medicines: ["Nux", "Carci", "Bismuth", "Cad Sulph"]
        },
        {
          name: { ur: "دمہ", en: "Asthma", roman: "Dama" },
          medicines: ["Carci", "Tuber", "Baci", "Phos", "Lyco", "K.Carb", "Bry", "Ant Tart", "K.Sulph", "Ipec", "Ars", "Ars Iod", "Lachesis", "Senega"]
        },
        {
          name: { ur: "ٹی بی", en: "Tuberculosis", roman: "TB" },
          medicines: ["Carci", "Tuber", "Phos", "Ars Iod", "K.Carb", "Drosera", "Aurum"]
        },
        {
          name: { ur: "دل کا دورہ", en: "Heart Attack", roman: "Dil ka Dora" },
          medicines: ["Acon", "Veratrum Album", "Cactus", "Aur"]
        },
        {
          name: { ur: "نیومونیا", en: "Pneumonia", roman: "Pneumonia" },
          medicines: ["Tuber", "Pneumococcin", "Lyco", "Cheli", "Ant Tart", "Phos", "Bry"]
        },
        {
          name: { ur: "پلوریسی", en: "Pleurisy", roman: "Pleurisy" },
          medicines: ["Carci", "Tuber", "Bry", "K.Carb", "Carbo Animalis", "Senega", "Sulphur"]
        },
        {
          name: { ur: "پینی ک اٹیک", en: "Panic Attack", roman: "Panic Attack" },
          medicines: ["Acon", "Gels", "Ignatia"]
        },
        {
          name: { ur: "ہائیٹل ہرنیا", en: "Hiatal Hernia", roman: "Hiatal Hernia" },
          medicines: ["Nux", "Bismuth", "Cad Sulph"]
        }
      ]
    },
    {
      id: 5,
      name: { ur: "پیٹ کا درد", en: "Abdomen Pain", roman: "Pait ka Dard" },
      icon: "🤢",
      conditions: [
        {
          name: { ur: "جگر کا درد", en: "Liver Pain", roman: "Jigar ka Dard" },
          medicines: ["Lyco", "Cheli", "Mag-Mur", "Ranunculus Bulbosus", "Cholesterinum", "Ptelea", "Myrica Cerifera", "Cardu Mar", "M.Sol", "Leptandra"]
        },
        {
          name: { ur: "معدے کا درد", en: "Stomach Pain", roman: "Mede ka Dard" },
          medicines: ["Nux", "Puls", "Abies Nigra", "Bismuth", "Cad Sulph"]
        },
        {
          name: { ur: "تلی کا درد", en: "Spleen Pain", roman: "Tili ka Dard" },
          medicines: ["China", "Ceanothus", "Anthracinum"]
        },
        {
          name: { ur: "آنتوں کا سنکڑاؤ", en: "IBS", roman: "IBS" },
          medicines: ["Nux", "Baci", "Carci", "Aloe", "M.Sol", "M.Car", "Lyco", "Cuprum", "Gels", "Arg Nit"]
        },
        {
          name: { ur: "کروہن بیماری", en: "Crohn's Disease", roman: "Crohn's Disease" },
          medicines: ["Nux", "Carci", "Baci", "Aloe", "M.Cor", "Cuprum Met", "Veratrum Album"]
        },
        {
          name: { ur: "خوراک کا زہر", en: "Food Poisoning", roman: "Khurak ka Zehr" },
          medicines: ["Nux", "Baci", "Camph", "Cuprum Met", "Veratrum Album", "Puls", "Arsenic"]
        },
        {
          name: { ur: "خوراک کی الررجی", en: "Food Allergy", roman: "Khurak ki Allergy" },
          medicines: ["Carci", "Tuber", "Psori", "Urtica", "Apis", "Ars", "R.Tox", "Puls"]
        },
        {
          name: { ur: "گیس", en: "Gas", roman: "Gas" },
          medicines: ["Nux", "Puls", "K.Carb", "Lyco", "China", "Arg", "Carbo", "Raphanus", "Arg Nit", "Lobelia Inflata"]
        },
        {
          name: { ur: "پتھری", en: "Gall Stones", roman: "Pathri" },
          medicines: ["Nux", "Cheli", "Lyco", "Mag-Mur", "Ptelea", "Cardu Mar"]
        },
        {
          name: { ur: "گردے کی پتھری", en: "Kidney Stones", roman: "Gurde ki Pathri" },
          medicines: ["Berberis", "Lycopodium", "Sarsaparilla", "Ocimum Canum", "Hydrangea", "Equisetum"]
        },
        {
          name: { ur: "باسوری", en: "Hemorrhoids", roman: "Bawaseer" },
          medicines: ["Nux", "Aesculus", "Aloe", "Collinsonia", "Hamamelis", "Ratanhia", "Sulphur"]
        },
        {
          name: { ur: "زچہ کا درد", en: "Dysmenorrhea", roman: "Zicha ka Dard" },
          medicines: ["Puls", "Mag.Phos", "Cimicifuga", "Caulophyllum", "Belladonna", "Sepia", "Secale"]
        }
      ]
    },
    {
      id: 6,
      name: { ur: "ناک، کان، گلا", en: "Nose, Ear, Throat", roman: "Naak, Kaan, Gala" },
      icon: "👃",
      conditions: [
        {
          name: { ur: "ناک کی بیماریاں", en: "Nose Problems", roman: "Naak ki Bimariyan" },
          medicines: ["Ars", "Graph", "Hepar", "Hydrastis", "Kali Bich", "Puls", "Silicea", "Lemna Minor"]
        },
        {
          name: { ur: "نزلہ/پولیپ", en: "Polyp/DNS", roman: "Nazla/Polyp" },
          medicines: ["Lemna", "Teuc", "Sang Nit", "Thuja", "Calc"]
        },
        {
          name: { ur: "گلے کی بیماریاں", en: "Throat Problems", roman: "Gale ki Bimariyan" },
          medicines: ["Tuber", "Bell", "Medo", "Sil", "Phyto", "Alumen"]
        },
        {
          name: { ur: "اسٹریپ تھروٹ", en: "Strep Throat", roman: "Strep Throat" },
          medicines: ["Carci", "Tuber", "B.Carb"]
        },
        {
          name: { ur: "تھائرائڈ", en: "Thyroid", roman: "Thyroid" },
          medicines: ["Tuber", "Thyroid", "Iod", "Spong", "Cistus Can", "Bry", "B.Carb", "Scrophular"]
        },
        {
          name: { ur: "کان کا درد", en: "Ear Pain", roman: "Kaan ka Dard" },
          medicines: ["Bell", "Acid Fluor", "Merc", "Acid Nit", "Puls", "Graph", "Lach", "Veratrum"]
        },
        {
          name: { ur: "ممس", en: "Mumps", roman: "Mumps" },
          medicines: ["Jaborandi", "Puls", "Merc Iod Flav", "Merc Iod Rub", "Bell", "Ferrum Phos"]
        }
      ]
    },
    {
      id: 7,
      name: { ur: "دانت کا درد", en: "Teeth Pain", roman: "Daant ka Dard" },
      icon: "🦷",
      conditions: [
        {
          name: { ur: "دانت کا درد", en: "Toothache", roman: "Daant ka Dard" },
          medicines: ["Pyrog", "Staphy", "Sil", "Merc", "Mez", "Acid Fluor", "K.Carb", "Hepar", "Acid Nit", "Plantago"]
        },
        {
          name: { ur: "دانت کا کالا ہونا", en: "Black Teeth", roman: "Daant ka Kala Hona" },
          medicines: ["Staphy", "Kreosote"]
        },
        {
          name: { ur: "مسوڑھوں کی سوزش", en: "Gingivitis", roman: "Masudhon ki Sozish" },
          medicines: ["Merc Sol", "Acid Nit"]
        }
      ]
    },
    {
      id: 8,
      name: { ur: "آنکھوں کا درد", en: "Eyes Pain", roman: "Aankhon ka Dard" },
      icon: "👁️",
      conditions: [
        {
          name: { ur: "آنکھوں کا درد", en: "Eye Pain", roman: "Aankhon ka Dard" },
          medicines: ["Gelsimium", "Bell", "Ruta", "Bry", "Nat Mur"]
        },
        {
          name: { ur: "آنکھوں کے نیچے کالے حلقے", en: "Black Circles", roman: "Aankhon ke Neeche Kale Halqay" },
          medicines: ["Staphysagria", "Acid Phos", "C.Phos"]
        },
        {
          name: { ur: "آنکھوں کا انفیکشن", en: "Eye Infection", roman: "Aankhon ka Infection" },
          medicines: ["Bella", "Euphr", "Arg Nit", "Sulph"]
        }
      ]
    },
    {
      id: 9,
      name: { ur: "چہرے کا درد", en: "Face Pain", roman: "Chehre ka Dard" },
      icon: "😫",
      conditions: [
        {
          name: { ur: "ٹرائجیمینل نیورالجیا", en: "Trigeminal Neuralgia", roman: "Trigeminal Neuralgia" },
          medicines: ["Mag Phos", "Hypericum", "Thallium", "Veratrum", "Lachesis", "Spige", "Sang"]
        }
      ]
    }
  ]
};
