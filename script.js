document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calculatorForm');
    
    let currentMode = 'domestic';

    // Tab Logic (Domestic / Commercial)
    const tabDomestic = document.getElementById('tabDomestic');
    const tabCommercial = document.getElementById('tabCommercial');
    const rateInput = document.getElementById('rate');

    const billInputLabel = document.getElementById('billInputLabel');
    const q1Input = document.getElementById('q1');
    const q2Wrapper = document.getElementById('q2Wrapper');
    const q3Wrapper = document.getElementById('q3Wrapper');
    const q4Wrapper = document.getElementById('q4Wrapper');
    const exportRateGroup = document.getElementById('exportRateGroup');
    const mainHeading = document.getElementById('mainHeading');
    const subHeading = document.getElementById('subHeading');
    const netMeteringCard = document.getElementById('netMeteringCard');

    if (tabDomestic) {
        tabDomestic.addEventListener('click', () => {
            currentMode = 'domestic';
            tabDomestic.classList.add('active');
            if (tabCommercial) tabCommercial.classList.remove('active');
            if (rateInput) rateInput.value = '7.50';
            
            if(billInputLabel) billInputLabel.innerText = 'Enter Bills for Last 4 Quarters (₹)';
            if(q1Input) q1Input.placeholder = 'Quarter 1';
            if(q2Wrapper) q2Wrapper.classList.remove('hidden');
            if(q3Wrapper) q3Wrapper.classList.remove('hidden');
            if(q4Wrapper) q4Wrapper.classList.remove('hidden');
            if(exportRateGroup) exportRateGroup.classList.remove('hidden');
            
            if (mainHeading) mainHeading.innerText = 'PM Surya Ghar Muft Bijli Yojana (On-Grid)';
            if (subHeading) subHeading.innerText = 'Enter your electricity bills from the last 4 quarters to see how much you can save with solar.';
        });
    }

    if (tabCommercial) {
        tabCommercial.addEventListener('click', () => {
            currentMode = 'commercial';
            tabCommercial.classList.add('active');
            if (tabDomestic) tabDomestic.classList.remove('active');
            if (rateInput) rateInput.value = '10.00'; // Default commercial rate
            
            if(billInputLabel) billInputLabel.innerText = 'Average Monthly Bill (₹)';
            if(q1Input) q1Input.placeholder = 'Monthly Bill Amount';
            if(q2Wrapper) q2Wrapper.classList.add('hidden');
            if(q3Wrapper) q3Wrapper.classList.add('hidden');
            if(q4Wrapper) q4Wrapper.classList.add('hidden');
            if(exportRateGroup) exportRateGroup.classList.add('hidden');
            
            if (mainHeading) mainHeading.innerText = 'Commercial Solar Solutions (On-Grid)';
            if (subHeading) subHeading.innerText = 'Enter your average monthly bill to calculate your tax benefits and solar savings.';
        });
    }

    // Formatting currency
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // 1. Gather Inputs
        let totalYearlyBill = 0;
        
        if (currentMode === 'domestic') {
            const q1 = parseFloat(document.getElementById('q1').value) || 0;
            const q2 = parseFloat(document.getElementById('q2').value) || 0;
            const q3 = parseFloat(document.getElementById('q3').value) || 0;
            const q4 = parseFloat(document.getElementById('q4').value) || 0;
            totalYearlyBill = q1 + q2 + q3 + q4;
        } else {
            const monthlyBill = parseFloat(document.getElementById('q1').value) || 0;
            totalYearlyBill = monthlyBill * 12;
        }

        let rate = parseFloat(document.getElementById('rate').value);
        if (isNaN(rate) || rate <= 0) {
            rate = 7.50; // Default rate
        }
        
        let exportRate = 3.00;
        const exportRateEl = document.getElementById('exportRate');
        if (exportRateEl) {
            exportRate = parseFloat(exportRateEl.value);
            if (isNaN(exportRate) || exportRate < 0) exportRate = 3.00;
        }

        // Validation
        if (totalYearlyBill <= 0) {
            document.getElementById('errorMessage').classList.remove('hidden');
            return;
        }
        document.getElementById('errorMessage').classList.add('hidden');

        // 2. Core Calculations
        const avgMonthlyBill = totalYearlyBill / 12;
        const totalYearlyUnits = totalYearlyBill / rate;
        const avgDailyUnits = totalYearlyUnits / 365;

        // System Size logic from first prompt: 1kW = 4 units/day. NO buffer.
        let recommendedSize = Math.ceil(avgDailyUnits / 4);
        if (recommendedSize < 1) recommendedSize = 1;

        const expectedDailyGeneration = recommendedSize * 4;

        // 3. Financial Calculations
        let subsidy = 0;
        let taxSavings = 0;
        
        if (currentMode === 'domestic') {
            if (recommendedSize === 1) {
                subsidy = 30000;
            } else if (recommendedSize === 2) {
                subsidy = 60000;
            } else if (recommendedSize >= 3) {
                subsidy = 78000;
            }
        }

        let costPerKw = 70000;
        if (currentMode === 'commercial') {
            if (recommendedSize <= 10) {
                costPerKw = 55000;
            } else if (recommendedSize <= 50) {
                costPerKw = 50000;
            } else {
                costPerKw = 45000;
            }
        }

        const totalCost = recommendedSize * costPerKw;
        
        if (currentMode === 'commercial') {
            taxSavings = totalCost * 0.40 * 0.25;
        }

        const netCost = totalCost - subsidy;

        // EMI Calculation using standard reducing balance formula
        const annualInterestRate = 0.0575;
        const monthlyRate = annualInterestRate / 12;

        let loanYearsInput = parseInt(document.getElementById('loanYears').value);
        if (isNaN(loanYearsInput) || loanYearsInput <= 0) {
            loanYearsInput = 5;
        }
        const loanMonths = loanYearsInput * 12;

        let emi = 0;
        if (netCost > 0) {
            emi = (netCost * monthlyRate * Math.pow(1 + monthlyRate, loanMonths)) / (Math.pow(1 + monthlyRate, loanMonths) - 1);
        }

        const totalInterestPaid = netCost > 0 ? (emi * loanMonths) - netCost : 0;

        // 4. Net Metering Calculation
        const dailyExcess = expectedDailyGeneration - avgDailyUnits;
        const yearlyExcessUnits = dailyExcess > 0 ? dailyExcess * 365 : 0;
        const yearlyExportIncome = yearlyExcessUnits * exportRate;

        // 5. Update UI
        document.getElementById('resMonthlyBill').innerText = formatCurrency(avgMonthlyBill);
        document.getElementById('resDailyUnits').innerText = avgDailyUnits.toFixed(1) + ' Units';

        document.getElementById('resSystemSize').innerText = recommendedSize + ' kW';
        document.getElementById('resDailyGeneration').innerText = expectedDailyGeneration + ' Units/Day';

        document.getElementById('resTotalCost').innerText = formatCurrency(totalCost);
        
        const costSublabel = document.getElementById('resCostSublabel');
        if(costSublabel) costSublabel.innerText = '@ ' + formatCurrency(costPerKw) + ' / kW';
        
        if (currentMode === 'domestic') {
            const lblSubsidy = document.getElementById('lblSubsidyTax');
            if(lblSubsidy) lblSubsidy.innerText = "Govt Subsidy";
            document.getElementById('resSubsidy').innerText = '-' + formatCurrency(subsidy);
            const subLabel = document.getElementById('resSubsidySublabel');
            if(subLabel) subLabel.innerText = "PM Surya Ghar Scheme";
            if (netMeteringCard) netMeteringCard.classList.remove('hidden');
        } else {
            const lblSubsidy = document.getElementById('lblSubsidyTax');
            if(lblSubsidy) lblSubsidy.innerText = "Est. Tax Savings";
            document.getElementById('resSubsidy').innerText = formatCurrency(taxSavings);
            const subLabel = document.getElementById('resSubsidySublabel');
            if(subLabel) subLabel.innerText = "Accelerated Depreciation";
            if (netMeteringCard) netMeteringCard.classList.add('hidden');
        }
        
        document.getElementById('resNetCost').innerText = formatCurrency(netCost);
        
        const resExcessUnits = document.getElementById('resExcessUnits');
        if(resExcessUnits) resExcessUnits.innerText = yearlyExcessUnits.toFixed(0) + ' Units/Year';
        
        const resExportIncome = document.getElementById('resExportIncome');
        if(resExportIncome) resExportIncome.innerText = formatCurrency(yearlyExportIncome);

        // Update Comparison Section
        document.getElementById('barBillAmount').innerText = formatCurrency(avgMonthlyBill);
        document.getElementById('barEmiAmount').innerText = formatCurrency(emi);

        // Calculate bar widths
        const maxAmount = Math.max(avgMonthlyBill, emi);
        const billPercentage = maxAmount > 0 ? (avgMonthlyBill / maxAmount) * 100 : 0;
        const emiPercentage = maxAmount > 0 ? (emi / maxAmount) * 100 : 0;

        // Toggle views
        document.getElementById('placeholderState').classList.add('hidden');
        document.getElementById('resultsState').classList.remove('hidden');

        // Animate bars slightly after revealing the section for visual effect
        setTimeout(() => {
            document.getElementById('barBillFill').style.width = billPercentage + '%';
            document.getElementById('barEmiFill').style.width = emiPercentage + '%';
        }, 100);

        // Scroll to results on mobile
        if (window.innerWidth < 1024) {
            document.getElementById('resultsState').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Dynamic text updates based on selected years
        document.getElementById('emiLabel').innerText = `Est. Monthly EMI (For ${loanYearsInput} Years)`;
        document.getElementById('emiNote').innerText = `Calculated at 5.75% reducing balance interest for ${loanMonths} months`;
        document.getElementById('freeElecNote').innerText = `After ${loanYearsInput} years of EMI payments, your electricity will be practically`;

        document.getElementById('modalEmiLabel').innerText = `Estimated Monthly EMI (${loanMonths} Months):`;
        document.getElementById('modalInterestLabel').innerText = `Over the ${loanYearsInput} years, the total interest paid is`;

        // Update Modal Data
        document.getElementById('modalProjectCost').innerText = formatCurrency(totalCost);
        document.getElementById('modalSubsidy').innerText = formatCurrency(subsidy);
        document.getElementById('modalNetPayable').innerText = formatCurrency(netCost);
        document.getElementById('modalEmi').innerText = formatCurrency(emi) + ' / month';
        document.getElementById('modalTotalInterest').innerText = formatCurrency(totalInterestPaid);
    });

    // Modal Logic
    const modal = document.getElementById('loanModal');
    const btnLoanBreakdown = document.getElementById('btnLoanBreakdown');
    const closeModal = document.getElementById('closeModal');

    if (btnLoanBreakdown) {
        btnLoanBreakdown.addEventListener('click', () => {
            modal.classList.remove('hidden');
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }

    // Initialize AOS Animation
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
    // Navbar Scroll Logic
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile Navbar Logic
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const navLinks = document.getElementById('navLinks');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const navItems = document.querySelectorAll('.nav-links a');

    const toggleMenu = () => {
        navLinks.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
    };

    if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', toggleMenu);
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', toggleMenu);
    if (mobileOverlay) mobileOverlay.addEventListener('click', toggleMenu);
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Solar Diagram Tabs
    const tabOn = document.getElementById('tabDiagramOn');
    const tabOff = document.getElementById('tabDiagramOff');
    const tabHyb = document.getElementById('tabDiagramHyb');
    const diagOn = document.getElementById('diagOn');
    const diagOff = document.getElementById('diagOff');
    const diagHyb = document.getElementById('diagHyb');

    const resetDiagramTabs = () => {
        if(tabOn) tabOn.classList.remove('active');
        if(tabOff) tabOff.classList.remove('active');
        if(tabHyb) tabHyb.classList.remove('active');
        if(diagOn) diagOn.classList.add('hidden');
        if(diagOff) diagOff.classList.add('hidden');
        if(diagHyb) diagHyb.classList.add('hidden');
    };

    if (tabOn) {
        tabOn.addEventListener('click', () => {
            resetDiagramTabs();
            tabOn.classList.add('active');
            diagOn.classList.remove('hidden');
        });
    }
    if (tabOff) {
        tabOff.addEventListener('click', () => {
            resetDiagramTabs();
            tabOff.classList.add('active');
            diagOff.classList.remove('hidden');
        });
    }
    if (tabHyb) {
        tabHyb.addEventListener('click', () => {
            resetDiagramTabs();
            tabHyb.classList.add('active');
            diagHyb.classList.remove('hidden');
        });
    }

    // Callback Form WhatsApp Logic
    const callbackForm = document.getElementById('callbackForm');
    if (callbackForm) {
        callbackForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            const name = document.getElementById('cbName').value;
            const phone = document.getElementById('cbPhone').value;
            const interest = document.getElementById('cbInterest').value;
            
            const message = `Hello Surya Solar Energy! I would like to request a callback.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Interested In:* ${interest}`;
            const whatsappUrl = `https://wa.me/919832173164?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // Distributor App Modal Logic
    const distributorAppBtn = document.getElementById('distributorAppBtn');
    const distributorWarningModal = document.getElementById('distributorWarningModal');
    const closeDistributorModal = document.getElementById('closeDistributorModal');
    const cancelDistributor = document.getElementById('cancelDistributor');
    const proceedDistributor = document.getElementById('proceedDistributor');

    if (distributorAppBtn && distributorWarningModal) {
        distributorAppBtn.addEventListener('click', (e) => {
            e.preventDefault();
            distributorWarningModal.classList.remove('hidden');
        });

        const hideDistributorModal = () => {
            distributorWarningModal.classList.add('hidden');
        };

        if (closeDistributorModal) closeDistributorModal.addEventListener('click', hideDistributorModal);
        if (cancelDistributor) cancelDistributor.addEventListener('click', hideDistributorModal);
        
        if (proceedDistributor) {
            proceedDistributor.addEventListener('click', () => {
                hideDistributorModal();
                // To download PDF: window.location.href = "pdfs/INFORMATION.pdf";
                // To go to playstore: window.open("YOUR_PLAYSTORE_LINK", "_blank");
                alert("This will download the distributor app.");
            });
        }
    }

    // PDF View Modal Logic
    const viewPdfBtn = document.getElementById('viewPdfBtn');
    const pdfModal = document.getElementById('pdfModal');
    const closePdfModal = document.getElementById('closePdfModal');

    if (viewPdfBtn && pdfModal) {
        viewPdfBtn.addEventListener('click', (e) => {
            e.preventDefault();
            pdfModal.classList.remove('hidden');
        });

        if (closePdfModal) {
            closePdfModal.addEventListener('click', () => {
                pdfModal.classList.add('hidden');
            });
        }
    }

});
