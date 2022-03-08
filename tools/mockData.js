const requests = [
  {
    id: 294473,
    requestStatus: "Completed",
    requestorName: "Nagato Uzumaki",
    researcherName: "Rock Lee",
    dealCode: "CODE789",
    submittedDate: "2022-03-22T00:35",
    requestedDueDate: "2022-03-23T00:35",
    actualDueDate: "2022-03-23T00:35",
    completedDate: "2022-03-23T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK111",
    phoneNo: 180012388888,
    requestorLocation: "LN",
    emailId: "Nagato Uzumaki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 3,
    tatCategory: 1,
  },
  {
    id: 293024,
    requestStatus: "Partial",
    requestorName: "Nagato Uzumaki",
    researcherName: "Rock Lee",
    dealCode: "CODE567",
    submittedDate: "2022-03-22T00:35",
    requestedDueDate: "2022-03-23T00:35",
    actualDueDate: "2022-03-24T00:35",
    completedDate: "2022-03-24T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "285788",
    nbkId: "NBK111",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Nagato Uzumaki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 2,
    tatCategory: 5,
  },
  {
    id: 292700,
    requestStatus: "Partial",
    requestorName: "Itachi Uchiha",
    researcherName: "Kakashi Hatake",
    dealCode: "CODE890",
    submittedDate: "2022-03-22T00:35",
    requestedDueDate: "2022-03-23T00:35",
    actualDueDate: "2022-03-24T00:35",
    completedDate: "2022-03-24T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK444",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Itachi Uchiha@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 4,
    tatCategory: 5,
  },
  {
    id: 291710,
    requestStatus: "Completed",
    requestorName: "Onoki",
    researcherName: "Naruto Uzumaki",
    dealCode: "CODE567",
    submittedDate: "2022-03-22T00:35",
    requestedDueDate: "2022-03-23T00:35",
    actualDueDate: "2022-03-25T00:35",
    completedDate: "2022-03-25T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK666",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Onoki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 2,
    tatCategory: 3,
  },
  {
    id: 291637,
    requestStatus: "Active",
    requestorName: "Zabuza Momochi",
    researcherName: "Itachi Uchiha",
    dealCode: "CODE890",
    submittedDate: "2022-03-22T00:35",
    requestedDueDate: "2022-03-23T00:35",
    actualDueDate: "2022-03-25T00:35",
    completedDate: "2022-03-25T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "281823",
    nbkId: "NBK777",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Zabuza Momochi@naruto.com",
    addlRecipients: "",
    clientName: "Client 2",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 289243,
    requestStatus: "Submitted",
    requestorName: "Asura Ōtsutsuki",
    researcherName: "Kakashi Hatake",
    dealCode: "CODE234",
    submittedDate: "2022-03-22T00:35",
    requestedDueDate: "2022-03-23T00:35",
    actualDueDate: "2022-03-24T00:35",
    completedDate: "2022-03-24T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK333",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Asura Ōtsutsuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 3",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 289003,
    requestStatus: "Active",
    requestorName: "Mei Terumi",
    researcherName: "Itachi Uchiha",
    dealCode: "CODE456",
    submittedDate: "2022-03-22T00:35",
    requestedDueDate: "2022-03-23T00:35",
    actualDueDate: "2022-03-23T00:35",
    completedDate: "2022-03-23T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "260500",
    nbkId: "NBK222",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Mei Terumi@naruto.com",
    addlRecipients: "",
    clientName: "Client 1",
    workCategory: 1,
    tatCategory: 1,
  },
  {
    id: 287531,
    requestStatus: "Completed",
    requestorName: "Kisame Hoshigaki",
    researcherName: "Kakashi Hatake",
    dealCode: "CODE345",
    submittedDate: "2022-03-21T00:35",
    requestedDueDate: "2022-03-22T00:35",
    actualDueDate: "2022-03-23T00:35",
    completedDate: "2022-03-23T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "252716",
    nbkId: "NBK555",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Kisame Hoshigaki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 2,
    tatCategory: 3,
  },
  {
    id: 285788,
    requestStatus: "Partial",
    requestorName: "Gengetsu Hozuki",
    researcherName: "Itachi Uchiha",
    dealCode: "CODE456",
    submittedDate: "2022-03-21T00:35",
    requestedDueDate: "2022-03-22T00:35",
    actualDueDate: "2022-03-23T00:35",
    completedDate: "2022-03-23T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "242818",
    nbkId: "NBK999",
    phoneNo: "180012388888",
    requestorLocation: "HK",
    emailId: "Gengetsu Hozuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 2,
    tatCategory: 5,
  },
  {
    id: 284679,
    requestStatus: "Active",
    requestorName: "Onoki",
    researcherName: "Naruto Uzumaki",
    dealCode: "CODE789",
    submittedDate: "2022-03-21T00:35",
    requestedDueDate: "2022-03-22T00:35",
    actualDueDate: "2022-03-23T00:35",
    completedDate: "2022-03-23T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "289003",
    nbkId: "NBK666",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Onoki@naruto.com",
    addlRecipients: "",
    clientName: "Client 2",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 284155,
    requestStatus: "Partial",
    requestorName: "Mei Terumi",
    researcherName: "Naruto Uzumaki",
    dealCode: "CODE678",
    submittedDate: "2022-03-21T00:35",
    requestedDueDate: "2022-03-22T00:35",
    actualDueDate: "2022-03-23T00:35",
    completedDate: "2022-03-23T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "238295",
    nbkId: "NBK222",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Mei Terumi@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 4,
    tatCategory: 5,
  },
  {
    id: 283439,
    requestStatus: "Active",
    requestorName: "Itachi Uchiha",
    researcherName: "Rock Lee",
    dealCode: "CODE567",
    submittedDate: "2022-03-21T00:35",
    requestedDueDate: "2022-03-22T00:35",
    actualDueDate: "2022-03-24T00:35",
    completedDate: "2022-03-24T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "255678",
    nbkId: "NBK444",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Itachi Uchiha@naruto.com",
    addlRecipients: "",
    clientName: "Client 1",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 281823,
    requestStatus: "Active",
    requestorName: "Suigetsu Hozuki",
    researcherName: "Sasuke Uchiha",
    dealCode: "CODE901",
    submittedDate: "2022-03-21T00:35",
    requestedDueDate: "2022-03-22T00:35",
    actualDueDate: "2022-03-23T00:35",
    completedDate: "2022-03-23T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK888",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Suigetsu Hozuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 2",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 279117,
    requestStatus: "Active",
    requestorName: "Nagato Uzumaki",
    researcherName: "Naruto Uzumaki",
    dealCode: "CODE234",
    submittedDate: "2022-03-21T00:35",
    requestedDueDate: "2022-03-22T00:35",
    actualDueDate: "2022-03-22T00:35",
    completedDate: "2022-03-22T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "289003",
    nbkId: "NBK111",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Nagato Uzumaki@naruto.com",
    addlRecipients: "",
    clientName: "Client 1",
    workCategory: 1,
    tatCategory: 1,
  },
  {
    id: 276842,
    requestStatus: "Submitted",
    requestorName: "Itachi Uchiha",
    researcherName: "Naruto Uzumaki",
    dealCode: "CODE456",
    submittedDate: "2022-03-20T00:35",
    requestedDueDate: "2022-03-21T00:35",
    actualDueDate: "2022-03-23T00:35",
    completedDate: "2022-03-23T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "251977",
    nbkId: "NBK444",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Itachi Uchiha@naruto.com",
    addlRecipients: "",
    clientName: "Client 3",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 274145,
    requestStatus: "Submitted",
    requestorName: "Nagato Uzumaki",
    researcherName: "Naruto Uzumaki",
    dealCode: "CODE234",
    submittedDate: "2022-03-20T00:35",
    requestedDueDate: "2022-03-21T00:35",
    actualDueDate: "2022-03-22T00:35",
    completedDate: "2022-03-22T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "252716",
    nbkId: "NBK111",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Nagato Uzumaki@naruto.com",
    addlRecipients: "",
    clientName: "Client 3",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 273467,
    requestStatus: "Partial",
    requestorName: "Kisame Hoshigaki",
    researcherName: "Naruto Uzumaki",
    dealCode: "CODE123",
    submittedDate: "2022-03-20T00:35",
    requestedDueDate: "2022-03-21T00:35",
    actualDueDate: "2022-03-22T00:35",
    completedDate: "2022-03-22T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "289003",
    nbkId: "NBK555",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Kisame Hoshigaki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 4,
    tatCategory: 4,
  },
  {
    id: 273382,
    requestStatus: "Completed",
    requestorName: "Itachi Uchiha",
    researcherName: "Itachi Uchiha",
    dealCode: "CODE456",
    submittedDate: "2022-03-20T00:35",
    requestedDueDate: "2022-03-21T00:35",
    actualDueDate: "2022-03-21T00:35",
    completedDate: "2022-03-21T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "251817",
    nbkId: "NBK444",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Itachi Uchiha@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 2,
    tatCategory: 1,
  },
  {
    id: 269185,
    requestStatus: "Submitted",
    requestorName: "Kabuto Yakushi",
    researcherName: "Kakashi Hatake",
    dealCode: "CODE123",
    submittedDate: "2022-03-20T00:35",
    requestedDueDate: "2022-03-21T00:35",
    actualDueDate: "2022-03-22T00:35",
    completedDate: "2022-03-22T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK123",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Kabuto Yakushi@naruto.com",
    addlRecipients: "",
    clientName: "Client 3",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 265629,
    requestStatus: "Completed",
    requestorName: "Suigetsu Hozuki",
    researcherName: "Sasuke Uchiha",
    dealCode: "CODE789",
    submittedDate: "2022-03-20T00:35",
    requestedDueDate: "2022-03-21T00:35",
    actualDueDate: "2022-03-22T00:35",
    completedDate: "2022-03-22T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "273467",
    nbkId: "NBK888",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Suigetsu Hozuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 5,
    tatCategory: 4,
  },
  {
    id: 262336,
    requestStatus: "Completed",
    requestorName: "Gengetsu Hozuki",
    researcherName: "Itachi Uchiha",
    dealCode: "CODE567",
    submittedDate: "2022-03-19T00:35",
    requestedDueDate: "2022-03-20T00:35",
    actualDueDate: "2022-03-21T00:35",
    completedDate: "2022-03-21T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK999",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Gengetsu Hozuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 3,
    tatCategory: 4,
  },
  {
    id: 261233,
    requestStatus: "Partial",
    requestorName: "Onoki",
    researcherName: "Itachi Uchiha",
    dealCode: "CODE234",
    submittedDate: "2022-03-19T00:35",
    requestedDueDate: "2022-03-20T00:35",
    actualDueDate: "2022-03-21T00:35",
    completedDate: "2022-03-21T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "274145",
    nbkId: "NBK666",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Onoki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 3,
    tatCategory: 4,
  },
  {
    id: 261064,
    requestStatus: "Completed",
    requestorName: "Asura Ōtsutsuki",
    researcherName: "Naruto Uzumaki",
    dealCode: "CODE234",
    submittedDate: "2022-03-19T00:35",
    requestedDueDate: "2022-03-20T00:35",
    actualDueDate: "2022-03-20T00:35",
    completedDate: "2022-03-20T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "242818",
    nbkId: "NBK333",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Asura Ōtsutsuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 3,
    tatCategory: 1,
  },
  {
    id: 260500,
    requestStatus: "Active",
    requestorName: "Kabuto Yakushi",
    researcherName: "Kakashi Hatake",
    dealCode: "CODE123",
    submittedDate: "2022-03-19T00:35",
    requestedDueDate: "2022-03-20T00:35",
    actualDueDate: "2022-03-20T00:35",
    completedDate: "2022-03-20T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK123",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Kabuto Yakushi@naruto.com",
    addlRecipients: "",
    clientName: "Client 1",
    workCategory: 1,
    tatCategory: 1,
  },
  {
    id: 258417,
    requestStatus: "Partial",
    requestorName: "Asura Ōtsutsuki",
    researcherName: "Itachi Uchiha",
    dealCode: "CODE789",
    submittedDate: "2022-03-19T00:35",
    requestedDueDate: "2022-03-20T00:35",
    actualDueDate: "2022-03-22T00:35",
    completedDate: "2022-03-22T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK333",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Asura Ōtsutsuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 4,
    tatCategory: 5,
  },
  {
    id: 255678,
    requestStatus: "Active",
    requestorName: "Kisame Hoshigaki",
    researcherName: "Kakashi Hatake",
    dealCode: "CODE678",
    submittedDate: "2022-03-19T00:35",
    requestedDueDate: "2022-03-20T00:35",
    actualDueDate: "2022-03-21T00:35",
    completedDate: "2022-03-21T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK555",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Kisame Hoshigaki@naruto.com",
    addlRecipients: "",
    clientName: "Client 1",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 253275,
    requestStatus: "Completed",
    requestorName: "Kabuto Yakushi",
    researcherName: "Sasuke Uchiha",
    dealCode: "CODE678",
    submittedDate: "2022-03-19T00:35",
    requestedDueDate: "2022-03-20T00:35",
    actualDueDate: "2022-03-20T00:35",
    completedDate: "2022-03-20T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK123",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Kabuto Yakushi@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 3,
    tatCategory: 1,
  },
  {
    id: 252716,
    requestStatus: "Submitted",
    requestorName: "Mei Terumi",
    researcherName: "Itachi Uchiha",
    dealCode: "CODE123",
    submittedDate: "2022-03-19T00:35",
    requestedDueDate: "2022-03-20T00:35",
    actualDueDate: "2022-03-21T00:35",
    completedDate: "2022-03-21T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK222",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Mei Terumi@naruto.com",
    addlRecipients: "",
    clientName: "Client 3",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 251977,
    requestStatus: "Active",
    requestorName: "Gengetsu Hozuki",
    researcherName: "Rock Lee",
    dealCode: "CODE012",
    submittedDate: "2022-03-19T00:35",
    requestedDueDate: "2022-03-20T00:35",
    actualDueDate: "2022-03-21T00:35",
    completedDate: "2022-03-21T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK999",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Gengetsu Hozuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 2",
    workCategory: 1,
    tatCategory: 4,
  },
  {
    id: 251817,
    requestStatus: "Partial",
    requestorName: "Suigetsu Hozuki",
    researcherName: "Rock Lee",
    dealCode: "CODE345",
    submittedDate: "2022-03-19T00:35",
    requestedDueDate: "2022-03-20T00:35",
    actualDueDate: "2022-03-21T00:35",
    completedDate: "2022-03-21T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK888",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Suigetsu Hozuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 3,
    tatCategory: 4,
  },
  {
    id: 246041,
    requestStatus: "Completed",
    requestorName: "Mei Terumi",
    researcherName: "Kakashi Hatake",
    dealCode: "CODE123",
    submittedDate: "2022-03-18T00:35",
    requestedDueDate: "2022-03-19T00:35",
    actualDueDate: "2022-03-19T00:35",
    completedDate: "2022-03-19T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "260500",
    nbkId: "NBK222",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Mei Terumi@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 3,
    tatCategory: 1,
  },
  {
    id: 244326,
    requestStatus: "Active",
    requestorName: "Asura Ōtsutsuki",
    researcherName: "Sasuke Uchiha",
    dealCode: "CODE345",
    submittedDate: "2022-03-18T00:35",
    requestedDueDate: "2022-03-19T00:35",
    actualDueDate: "2022-03-19T00:35",
    completedDate: "2022-03-19T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "279117",
    nbkId: "NBK333",
    phoneNo: "180012388888",
    requestorLocation: "NY",
    emailId: "Asura Ōtsutsuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 1",
    workCategory: 1,
    tatCategory: 1,
  },
  {
    id: 243458,
    requestStatus: "Partial",
    requestorName: "Zabuza Momochi",
    researcherName: "Sasuke Uchiha",
    dealCode: "CODE456",
    submittedDate: "2022-03-18T00:35",
    requestedDueDate: "2022-03-19T00:35",
    actualDueDate: "2022-03-21T00:35",
    completedDate: "2022-03-21T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "255678",
    nbkId: "NBK777",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Zabuza Momochi@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 3,
    tatCategory: 4,
  },
  {
    id: 242818,
    requestStatus: "Partial",
    requestorName: "Zabuza Momochi",
    researcherName: "Kakashi Hatake",
    dealCode: "CODE123",
    submittedDate: "2022-03-18T00:35",
    requestedDueDate: "2022-03-19T00:35",
    actualDueDate: "2022-03-20T00:35",
    completedDate: "2022-03-20T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK777",
    phoneNo: "180012388888",
    requestorLocation: "HK",
    emailId: "Zabuza Momochi@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 2,
    tatCategory: 5,
  },
  {
    id: 241712,
    requestStatus: "Partial",
    requestorName: "Suigetsu Hozuki",
    researcherName: "Naruto Uzumaki",
    dealCode: "CODE234",
    submittedDate: "2022-03-18T00:35",
    requestedDueDate: "2022-03-19T00:35",
    actualDueDate: "2022-03-20T00:35",
    completedDate: "2022-03-20T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK888",
    phoneNo: "180012388888",
    requestorLocation: "HK",
    emailId: "Suigetsu Hozuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 2,
    tatCategory: 5,
  },
  {
    id: 239491,
    requestStatus: "Completed",
    requestorName: "Zabuza Momochi",
    researcherName: "Itachi Uchiha",
    dealCode: "CODE678",
    submittedDate: "2022-03-18T00:35",
    requestedDueDate: "2022-03-19T00:35",
    actualDueDate: "2022-03-20T00:35",
    completedDate: "2022-03-20T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "265629",
    nbkId: "NBK777",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Zabuza Momochi@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 5,
    tatCategory: 3,
  },
  {
    id: 238295,
    requestStatus: "Partial",
    requestorName: "Kabuto Yakushi",
    researcherName: "Sasuke Uchiha",
    dealCode: "CODE345",
    submittedDate: "2022-03-18T00:35",
    requestedDueDate: "2022-03-19T00:35",
    actualDueDate: "2022-03-20T00:35",
    completedDate: "2022-03-20T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "276842",
    nbkId: "NBK123",
    phoneNo: "180012388888",
    requestorLocation: "HK",
    emailId: "Kabuto Yakushi@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 2,
    tatCategory: 5,
  },
  {
    id: 238243,
    requestStatus: "Submitted",
    requestorName: "Onoki",
    researcherName: "Sasuke Uchiha",
    dealCode: "CODE567",
    submittedDate: "2022-03-18T00:35",
    requestedDueDate: "2022-03-19T00:35",
    actualDueDate: "2022-03-20T00:35",
    completedDate: "2022-03-20T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK666",
    phoneNo: "180012388888",
    requestorLocation: "HK",
    emailId: "Onoki@naruto.com",
    addlRecipients: "",
    clientName: "Client 3",
    workCategory: 2,
    tatCategory: 5,
  },
  {
    id: 238221,
    requestStatus: "Completed",
    requestorName: "Gengetsu Hozuki",
    researcherName: "Rock Lee",
    dealCode: "CODE890",
    submittedDate: "2022-03-18T00:35",
    requestedDueDate: "2022-03-19T00:35",
    actualDueDate: "2022-03-20T00:35",
    completedDate: "2022-03-20T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK999",
    phoneNo: "180012388888",
    requestorLocation: "LN",
    emailId: "Gengetsu Hozuki@naruto.com",
    addlRecipients: "",
    clientName: "Client 4",
    workCategory: 5,
    tatCategory: 4,
  },
  {
    id: 237128,
    requestStatus: "Submitted",
    requestorName: "Kisame Hoshigaki",
    researcherName: "Itachi Uchiha",
    dealCode: "CODE345",
    submittedDate: "2022-03-18T00:35",
    requestedDueDate: "2022-03-19T00:35",
    actualDueDate: "2022-03-20T00:35",
    completedDate: "2022-03-20T00:35",
    requestedInstructions: "This is just a sample instructions",
    parentReq: "",
    nbkId: "NBK555",
    phoneNo: "180012388888",
    requestorLocation: "HK",
    emailId: "Kisame Hoshigaki@naruto.com",
    addlRecipients: "",
    clientName: "Client 3",
    workCategory: 1,
    tatCategory: 4,
  },
];

module.exports = { requests };
