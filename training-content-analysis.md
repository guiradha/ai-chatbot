# Training Content Analysis Report

## Executive Summary
After analyzing the training course pages across your application, I found **CRITICAL INCONSISTENCIES** in the data architecture.

## Architecture Overview

Your application has **THREE different data sources** for training courses:

### 1. Protected Area Pages (`/cursos/[slug]` and `/cursos/[slug]/estudo`)
- **Data Source**: `lib/courses-data.ts`
- **Function**: `getCourseBySlug()`
- **Content**: Contains only a small subset of courses (appears to be demo/sample data)
- **Courses Available**: Limited set including NR-35, NR-10, etc.

### 2. Landing Pages (`/cursos-nr/[slug]`)
- **Data Source**: Hardcoded in `app/cursos-nr/[slug]/page.tsx`
- **Content**: Full training catalog (74 courses)
- **Format**: Large object with all training data embedded directly in the page component

### 3. Extracted Trainings File
- **Data Source**: `extracted-trainings.json`
- **Content**: Full training catalog (74 courses)
- **Format**: JSON file with training data (appears to be extracted from landing pages)

## CRITICAL FINDINGS

### ❌ MAJOR ISSUE: Data Inconsistency

1. **The protected area (`/cursos/[slug]`) uses DIFFERENT data than the landing pages (`/cursos-nr/[slug]`)**
   - Protected area pulls from `lib/courses-data.ts` which has LIMITED courses
   - Landing pages have ALL 74 courses hardcoded in the component

2. **Example: "direção-defensiva" course**
   - ❌ Does NOT exist in `lib/courses-data.ts` (protected area data)
   - ✅ EXISTS in landing page data (`/cursos-nr/[slug]`)
   - Result: Users can see this course on the landing page but CANNOT access it in the protected area

3. **Study/Learn Pages (`/cursos/[slug]/estudo`)**
   - Also use `lib/courses-data.ts`
   - Will FAIL for most courses because they don't exist in the data source
   - Only courses defined in `lib/courses-data.ts` will work

## Courses Available in Each System

### Protected Area (lib/courses-data.ts) - LIMITED
Based on the code structure, appears to only have sample courses like:
- NR-35 Trabalho em Altura
- NR-10 Básico
- (And a few others)

### Landing Pages (hardcoded) - COMPLETE (74 courses)
Including but not limited to:
- apr-analise-risco
- bombeiro-civil-classe1
- coleta-seletiva
- cultura-seguranca-organizacional
- gestao-cultura-seguranca
- lei-lucas
- lider-sst
- loto-lockout-tagout
- nocoes-combate-incendios
- nocoes-primeiros-socorros
- All NR courses (NR-01 through NR-37)
- And many more...

## Impact Analysis

### User Experience Issues:
1. **Broken Navigation**: Users clicking from landing page to protected area will get redirected or see "course not found"
2. **Missing Content**: Most courses visible on landing pages are NOT accessible in the learning environment
3. **Inconsistent Information**: Course details may differ between landing and protected pages for the same course

### Technical Issues:
1. **Data Duplication**: Same course data exists in multiple places with potential differences
2. **Maintenance Nightmare**: Updates need to be made in multiple locations
3. **No Single Source of Truth**: No centralized data management

## URGENT RECOMMENDATIONS

### Immediate Actions Required:

1. **Consolidate Data Sources**
   - Move ALL training data from the landing page component to `lib/courses-data.ts`
   - Ensure both protected and public pages use the same data source

2. **Data Migration**
   - Import the 74 courses from `extracted-trainings.json` into `lib/courses-data.ts`
   - Update the data structure to match the existing CourseData interface

3. **Update Landing Pages**
   - Modify `/cursos-nr/[slug]/page.tsx` to use `getCourseBySlug()` instead of hardcoded data
   - Remove the massive trainingData object from the component

4. **Verification**
   - Test all course links from landing pages to ensure they work in the protected area
   - Verify study pages load correctly for all courses

## Conclusion

**The current architecture has SEVERE inconsistencies that will cause most courses to be inaccessible to users.** The protected learning environment only recognizes a small subset of the courses advertised on the landing pages. This needs immediate attention to avoid user frustration and potential business impact.

**Priority: CRITICAL - This affects the core functionality of your training platform.**