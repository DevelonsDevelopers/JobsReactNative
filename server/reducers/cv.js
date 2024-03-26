import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cvService from "../services/cvService";

const initialState = {
  loading: false,
  fetched: false,
  data: [],
  error: "",
  // loading ========
  statementLoading: false,
  educationLoading: false,
  skillLoading: false,
  careerLoading: false,
  interestLoading: false,
  languageLoading: false,
  courseLoading: false ,
  // data ========
  statementData: [],
  educationData: [],
  skillData: [],
  careerData: [],
  interestData: [],
  languageData: [],
  courseData: [] ,
  // error ========
  statementError: false,
  educationError: false,
  skillError: false,
  careerError: false,
  interestError: false,
  languageError: false,
  courseError: false,
};

const fetchcv = createAsyncThunk("fetchcv", () => {
  return cvService.fetchByUser();
});

const statement = createAsyncThunk("statement", () => {
  return cvService.cvStatement();
});

// education ==========

const addEducation = createAsyncThunk("addEducation", () => {
  return cvService.addCVEducation();
});

const updateEducation = createAsyncThunk("updateEducation", () => {
  return cvService.updateCVEducation();
});

const deleteEducation = createAsyncThunk("deleteEducation", () => {
  return cvService.deleteCVEducation();
});

// career ==========

const addCVCareer = createAsyncThunk("addCVCareer", () => {
  return cvService.addCVCareer();
});

const updateCareer = createAsyncThunk("updateCareer", () => {
  return cvService.updateCVCareer();
});

const deleteCaree = createAsyncThunk("deleteCaree", () => {
  return cvService.deleteCVCareer();
});

// course ==========

const addCVCourse = createAsyncThunk("addCVCourse", () => {
  return cvService.addCVCourse();
});

const updateCourse = createAsyncThunk("updateCourse", () => {
  return cvService.updateCVCourse();
});

const deleteCourse = createAsyncThunk("deleteCourse", () => {
  return cvService.deleteCVCourse();
});

// Interest ==========

const addCVInterest = createAsyncThunk("addCVInterest", () => {
  return cvService.addCVInterest();
});

const updateInterest = createAsyncThunk("updateInterest", () => {
  return cvService.updateCVInterest();
});

const deleteInterest = createAsyncThunk("deleteInterest", () => {
  return cvService.deleteCVInterest();
});

// Language ==========

const addCVLanguage = createAsyncThunk("addCVLanguage", () => {
  return cvService.addCVLanguage();
});

const updateLanguage = createAsyncThunk("updateLanguage", () => {
  return cvService.updateCVLanguage();
});

const deleteLanguage = createAsyncThunk("deleteLanguage", () => {
  return cvService.deleteCVLanguage();
});

// Skills ==========

const addCVSkill = createAsyncThunk("addCVSkill", () => {
  return cvService.addCVSkill();
});

const updateSkill = createAsyncThunk("updateSkill", () => {
  return cvService.updateCVSkill();
});

const deleteSkill = createAsyncThunk("deleteSkill", () => {
  return cvService.deleteCVSkill();
});

const cv = createSlice({
  name: "cv",
  initialState,
  extraReducers: (builder) => {
    // fetch cv case  =========
    builder.addCase(fetchcv.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchcv.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.fetched = true;
    });
    builder.addCase(fetchcv.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });

    // add education case  =========
    builder.addCase(addEducation.pending, (state) => {
      state.educationLoading = true;
    });
    builder.addCase(addEducation.fulfilled, (state, action) => {
      state.educationLoading = false;
      state.educationData = action.payload.data;
    });
    builder.addCase(addEducation.rejected, (state, action) => {
      state.educationLoading = false;
      state.educationError = true;
    });
    

    // add career case  =========
    builder.addCase(addCVCareer.pending, (state) => {
      state.careerLoading = true;
    });
    builder.addCase(addCVCareer.fulfilled, (state, action) => {
      state.careerLoading = false;
      state.careerData = action.payload.data;
    });
    builder.addCase(addCVCareer.rejected, (state, action) => {
      state.careerLoading = false;
      state.careerError = true;
    });
    

    // add course case  =========
    builder.addCase(addCVCourse.pending, (state) => {
      state.courseLoading = true;
    });
    builder.addCase(addCVCourse.fulfilled, (state, action) => {
      state.courseLoading = false;
      state.courseData = action.payload.data;
     });
    builder.addCase(addCVCourse.rejected, (state, action) => {
      state.courseLoading = false;
      state.courseError = true;
    });
    

    // add interest case  =========
    builder.addCase(addCVInterest.pending, (state) => {
      state.interestLoading = true;
    });
    
    builder.addCase(addCVInterest.fulfilled, (state, action) => {
      state.interestLoading = false;
      state.interestData = action.payload.data;
     });

    builder.addCase(addCVInterest.rejected, (state, action) => {
      state.interestLoading = false;
      state.interestError = true;
    });
    

    // add Language case  =========
    builder.addCase(addCVLanguage.pending, (state) => {
      state.languageLoading = true;
    });

    builder.addCase(addCVLanguage.fulfilled, (state, action) => {
      state.languageLoading = false;
      state.languageData = action.payload.data;
     });

    builder.addCase(addCVLanguage.rejected, (state, action) => {
      state.languageLoading = false;
      state.languageError = true;
    });
    

    // add Language case  =========
    builder.addCase(addCVSkill.pending, (state) => {
      state.skillLoading = true;
    });

    builder.addCase(addCVSkill.fulfilled, (state, action) => {
      state.skillLoading = false;
      state.skillData = action.payload.data;
     });

    builder.addCase(addCVSkill.rejected, (state, action) => {
      state.skillLoading = false;
      state.skillError = true;
    });
    



  },
});

export default cv.reducer;