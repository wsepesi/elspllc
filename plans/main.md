# TODO

## Client Requests (December 6, 2025)

### Raw Requests

1. Play with font
2. Change section on Transactional Advice to Business Transactions [this is on several pages]
3. Add "and Brownfields" to page entitle "contaminated Sites"
4. Under presentations add "Your Product Has PFAS, Now What? What to Know About PFAS Bans" co-presented with Shalene Thomas at Minnesota CLE's 2024 Minnesota Environmental Institute. April 2024.
5. Modify the following under organizations to change 2022 to 2025:
   - Minnesota State Bar Association, Section on Environmental, Natural Resources & Energy Law: Governing Council Delegate (2007-2014, 2019-2022)
   - Minnesota CLE's Minnesota Environmental Institute Planning Committee (2009-2022)

### Parsed Development Tasks

#### 1. Font Updates

- [ ] Review current font configuration in `tailwind.config.js` and `src/configs/theme.ts`
- [ ] Explore alternative font options (consider professional law firm aesthetics)
- [ ] Test font variations across all pages
- [ ] Ensure proper font loading and fallbacks

#### 2. Rename "Transactional Advice" to "Business Transactions"

- [ ] Update component name from `TransactionalAdvice` to `BusinessTransactions` in `src/components/`
- [ ] Update all references in navigation components (`NavLinks.tsx`)
- [ ] Update content in `src/pages/PracticeFocus.tsx`
- [ ] Update any other pages that reference "Transactional Advice"
- [ ] Search for all text occurrences and update accordingly

#### 3. Update "Contaminated Sites" Page Title

- [ ] Change page title to "Contaminated Sites and Brownfields"
- [ ] Update `ContaminatedSites.tsx` component
- [ ] Update any navigation links that reference this page
- [ ] Update metadata and SEO titles

#### 4. Add New Presentation Entry

- [ ] Add to presentations page/component:
  ```
  "Your Product Has PFAS, Now What? What to Know About PFAS Bans"
  co-presented with Shalene Thomas at Minnesota CLE's 2024 Minnesota Environmental Institute.
  April 2024.
  ```
- [ ] Ensure proper formatting and chronological ordering

#### 5. Update Organization Dates

- [ ] Find and update the following entries (likely in About or Experience pages):
  - Minnesota State Bar Association, Section on Environmental, Natural Resources & Energy Law: Governing Council Delegate (2007-2014, 2019-2025)
  - Minnesota CLE's Minnesota Environmental Institute Planning Committee (2009-2025)
- [ ] Change "2022" to "2025" in both entries

#### 6. Mobile UI

#### 7. UI cleanup / revamp
