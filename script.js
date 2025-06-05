// Problem data
        const problemsData = [
            {
                category: "ARRAYS",
                problems: [
                    { id: 1, name: "Majority Element", link: "https://leetcode.com/problems/majority-element/description/", solution: "https://youtu.be/_xqIp2rj8bo?t=882", difficulty: "easy", companies: "Amazon Google", prereq: "" },
                    { id: 2, name: "Repeat & Missing Number", link: "https://leetcode.com/problems/find-missing-and-repeated-values/description/", solution: "https://youtu.be/0Fxc_jKj2vo?t=1321", difficulty: "easy", companies: "Amazon", prereq: "Hashing" },
                    { id: 3, name: "Merge 2 Sorted Arrays Without Extra Space", link: "https://leetcode.com/problems/merge-sorted-array/description/", solution: "https://www.youtube.com/watch?v=-1cLK6PaLsQ", difficulty: "easy", companies: "Amdocs Brocade Goldman Sachs Juniper Networks Linkedin Microsoft Quikr Snapdeal Synopsys Zoho Adobe", prereq: "Sorting" },
                    { id: 4, name: "Single Number", link: "https://leetcode.com/problems/single-number/description/", solution: "https://youtu.be/NWg38xWYzEg?t=1393", difficulty: "easy", companies: "", prereq: "" },
                    { id: 5, name: "Stock Buy & Sell", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/", solution: "https://youtu.be/WBzZCm46mFo?t=835", difficulty: "easy", companies: "Amazon DEShaw Directi Flipkart Goldman Sachs Intuit MakeMyTrip Microsoft Ola Cabs Oracle Paytm Pubmatic Quikr Salesforce Sapient Swiggy Walmart Media.net Google", prereq: "" },
                    { id: 6, name: "Kadane's Algorithm", link: "https://leetcode.com/problems/maximum-subarray/description/", solution: "https://youtu.be/9IZYqostl2M?t=760", difficulty: "medium", companies: "Microsoft Facebook", prereq: "" },
                    { id: 7, name: "Pow(x, n)", link: "https://leetcode.com/problems/powx-n/description/", solution: "https://youtu.be/WBzZCm46mFo?t=21", difficulty: "medium", companies: "", prereq: "" },
                    { id: 8, name: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/description/", solution: "https://www.youtube.com/watch?v=EbkMABpP52U", difficulty: "medium", companies: "Flipkart Dunzo", prereq: "" },
                    { id: 9, name: "Sort Array of 0s, 1s & 2s", link: "https://leetcode.com/problems/sort-colors/description/", solution: "https://www.youtube.com/watch?v=J48aGjfjYTI", difficulty: "medium", companies: "Microsoft Amazon MakeMyTrip", prereq: "Sorting" },
                    { id: 10, name: "3Sum", link: "https://leetcode.com/problems/3sum/description/", solution: "https://www.youtube.com/watch?v=K-RsltkN63w", difficulty: "medium", companies: "Adobe Amazon Microsoft Morgan Stanley Samsung Snapdeal Times Internet", prereq: "Hashing" },
                    { id: 11, name: "4Sum", link: "https://leetcode.com/problems/4sum/description/", solution: "https://www.youtube.com/watch?v=X6sL8JTROLY", difficulty: "medium", companies: "", prereq: "Hashing" },
                    { id: 12, name: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/description/", solution: "https://www.youtube.com/watch?v=LEFFjgt5i6w", difficulty: "medium", companies: "", prereq: "2D Array" },
                    { id: 13, name: "Next Permutation", link: "https://leetcode.com/problems/next-permutation/description/", solution: "https://youtu.be/-1cLK6PaLsQ?t=967", difficulty: "medium", companies: "Adobe GoldmanSachs Uber", prereq: "Sorting" },
                    { id: 14, name: "Merge Overlapping Intervals", link: "https://leetcode.com/problems/merge-intervals/description/", difficulty: "medium", companies: "Google", prereq: "Sorting" },
                    { id: 15, name: "Longest Substring Without Repeating", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/", difficulty: "medium", companies: "MorganStanley Amazon", prereq: "String" },
                    { id: 16, name: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/description/", difficulty: "medium", companies: "Microsoft Amazon", prereq: "Sets" },
                    { id: 17, name: "Word Search", link: "https://leetcode.com/problems/word-search/description/", difficulty: "medium", companies: "Ola GoldmanSachs Google", prereq: "Recursion" },
                    { id: 18, name: "Product of Array Except Itself", link: "https://leetcode.com/problems/product-of-array-except-self/description/", solution: "https://www.youtube.com/watch?v=TW2m8m_FNJE", difficulty: "medium", companies: "Amazon DEShaw Intuit MorganStanley Flipkart", prereq: "" },
                    { id: 19, name: "Subarray Sum Equals K", link: "https://leetcode.com/problems/subarray-sum-equals-k/description/", difficulty: "medium", companies: "", prereq: "Hashing" },
                    { id: 20, name: "Find Duplicate", link: "https://leetcode.com/problems/find-the-duplicate-number/", solution: "https://youtu.be/0Fxc_jKj2vo?t=2000", difficulty: "medium", companies: "Amazon D-E-Shaw Flipkart Paytm Qualcomm Zoho", prereq: "LL Cycles" },
                    { id: 21, name: "Count Inversions", link: "https://www.hackerrank.com/challenges/ctci-merge-sort/problem", difficulty: "medium/hard", companies: "Adobe Amazon BankBazaar Flipkart Microsoft Myntra MakeMyTrip", prereq: "Merge Sort" },
                    { id: 22, name: "Trapping Rainwater", link: "https://leetcode.com/problems/trapping-rain-water/description/", solution: "https://youtu.be/UHHp8USwx4M?t=513", difficulty: "hard", companies: "Samsung", prereq: "" },
                    { id: 23, name: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/description/", solution: "https://www.youtube.com/watch?v=XwG5cozqfaM", difficulty: "hard", companies: "Amazon Directi Flipkart Microsoft Google", prereq: "Hashing" },
                    { id: 24, name: "Reverse Pairs", link: "https://leetcode.com/problems/reverse-pairs/description/", difficulty: "hard", companies: "", prereq: "Merge Sort" },
                    { id: 25, name: "Largest Rectangle in Histogram", link: "https://leetcode.com/problems/largest-rectangle-in-histogram/description/", solution: "https://www.youtube.com/watch?v=ysy1o-QEj3k", difficulty: "hard", companies: "", prereq: "" }
                ]
            },
            {
                category: "BINARY SEARCH",
                problems: [
                    { id: 1, name: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/description/", solution: "https://www.youtube.com/watch?v=6WNZQBHWQJs", difficulty: "medium", companies: "Microsoft Google Adobe Amazon D-E-Shaw Flipkart Hike Intuit MakeMyTrip Paytm", prereq: "" },
                    { id: 2, name: "Peak Index in Mountain Array", link: "https://leetcode.com/problems/peak-index-in-a-mountain-array/description/", solution: "https://www.youtube.com/watch?v=RjxD6UXGlhc", difficulty: "medium", companies: "", prereq: "" },
                    { id: 3, name: "Single Element in Sorted Array", link: "https://leetcode.com/problems/single-element-in-a-sorted-array/description/", solution: "https://www.youtube.com/watch?v=qsbCBduIs40", difficulty: "medium", companies: "", prereq: "" },
                    { id: 4, name: "Allocate Minimum Pages (Book Allocation)", link: "https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1", solution: "https://www.youtube.com/watch?v=JRAByolWqhw", difficulty: "medium", companies: "Google Infosys Codenation Amazon Microsoft", prereq: "" },
                    { id: 5, name: "Painter's Partition", link: "https://www.hackerearth.com/problem/algorithm/painters-partition/", solution: "https://www.youtube.com/watch?v=srsFN5OHBgw", difficulty: "medium", companies: "", prereq: "" },
                    { id: 6, name: "Aggressive Cows", link: "https://www.spoj.com/problems/AGGRCOW/", solution: "https://www.youtube.com/watch?v=7wOzDqsfXy0", difficulty: "medium", companies: "Adobe", prereq: "" },
                    { id: 7, name: "Median of 2 Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", difficulty: "hard", companies: "Amazon Samsung Microsoft Google", prereq: "" }
                ]
            },
            {
                category: "STRINGS",
                problems: [
                    { id: 1, name: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/description/", solution: "https://www.youtube.com/watch?v=dSRFgEs3a6A", difficulty: "easy", companies: "Amazon Cisco DEShaw Facebook FactSet MorganStanley Paytm Zoho", prereq: "" },
                    { id: 2, name: "Longest Common Prefix", link: "https://leetcode.com/problems/longest-common-prefix/description/", difficulty: "easy", companies: "Adobe Blinkit Dunzo", prereq: "" },
                    { id: 3, name: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/description/", difficulty: "easy", companies: "Google Adobe Flipkart Nagarro Media.net Directi", prereq: "" },
                    { id: 4, name: "Reverse Words in String", link: "https://leetcode.com/problems/reverse-words-in-a-string/description/", solution: "https://www.youtube.com/watch?v=RitppzIdMCo", difficulty: "medium", companies: "", prereq: "" },
                    { id: 5, name: "Remove All Occurrences of String", link: "https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/", solution: "https://youtu.be/dSRFgEs3a6A?t=823", difficulty: "medium", companies: "", prereq: "" },
                    { id: 6, name: "Permutation in String", link: "https://leetcode.com/problems/permutation-in-string/description/", solution: "https://www.youtube.com/watch?v=VXewy91P0S4", difficulty: "medium", companies: "Adobe GoldmanSachs Uber", prereq: "" },
                    { id: 7, name: "String Compression", link: "https://leetcode.com/problems/string-compression/description/", solution: "https://www.youtube.com/watch?v=cAB15h6-sWA", difficulty: "medium", companies: "", prereq: "" },
                    { id: 8, name: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/description/", difficulty: "medium", companies: "Samsung Adobe Amazon", prereq: "" },
                    { id: 9, name: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/description/", difficulty: "hard", companies: "Amazon Google MakeMyTrip Streamoid Technologies Microsoft Media.net Atlassian Flipkart", prereq: "" },
                    { id: 10, name: "KMP Algorithm", link: "https://leetcode.com/problems/longest-happy-prefix/description/", difficulty: "hard", companies: "", prereq: "" },
                    { id: 11, name: "Robin Karp", link: "", difficulty: "hard", companies: "", prereq: "" }
                ]
            }
        ];

        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Set default date to today
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('tracking-date').value = today;
            
            // Load problems for the default date
            loadProblems(today);
            
            // Add event listener for date change
            document.getElementById('tracking-date').addEventListener('change', function() {
                loadProblems(this.value);
            });
        });

        // Load problems for a specific date
        function loadProblems(date) {
            const container = document.getElementById('problems-container');
            container.innerHTML = '';
            
            // Calculate total problems for stats
            let totalProblems = 0;
            problemsData.forEach(category => {
                totalProblems += category.problems.length;
            });
            document.getElementById('total-count').textContent = totalProblems;
            
            // Load each category and its problems
            problemsData.forEach(category => {
                const categoryDiv = document.createElement('div');
                categoryDiv.innerHTML = `
                    <div class="category">${category.category}</div>
                    <table class="problem-table">
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th>#</th>
                                <th>Problem</th>
                                <th>Link</th>
                                <th>Difficulty</th>
                                <th>Solution</th>
                                <th>Companies</th>
                                <th>Pre-requisites</th>
                            </tr>
                        </thead>
                        <tbody id="${category.category.toLowerCase().replace(' ', '-')}-problems">
                            <!-- Problems will be added here -->
                        </tbody>
                    </table>
                `;
                container.appendChild(categoryDiv);
                
                const tbody = document.getElementById(`${category.category.toLowerCase().replace(' ', '-')}-problems`);
                
                category.problems.forEach(problem => {
                    const problemId = `${category.category}-${problem.id}`;
                    const isSolved = localStorage.getItem(`${date}-${problemId}`) === 'true';
                    
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>
                            <label class="status-toggle">
                                <input type="checkbox" id="${problemId}" ${isSolved ? 'checked' : ''}>
                                <span class="slider"></span>
                            </label>
                        </td>
                        <td>${problem.id}</td>
                        <td class="problem-name">${problem.name}</td>
                        <td><a href="${problem.link}" class="problem-link" target="_blank">Problem Link</a></td>
                        <td><span class="difficulty-${problem.difficulty}">${problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}</span></td>
                        <td>${problem.solution ? `<a href="${problem.solution}" class="problem-link" target="_blank">Solution</a>` : ''}</td>
                        <td>${problem.companies}</td>
                        <td>${problem.prereq}</td>
                    `;
                    tbody.appendChild(row);
                    
                    // Add event listener to the toggle
                    const toggle = row.querySelector('input');
                    toggle.addEventListener('change', function() {
                        localStorage.setItem(`${date}-${problemId}`, this.checked);
                        updateStats(date);
                    });
                });
            });
            
            // Update stats after loading
            updateStats(date);
        }

        // Update statistics
        function updateStats(date) {
            let totalSolved = 0;
            let solvedToday = 0;
            let totalProblems = 0;
            
            problemsData.forEach(category => {
                category.problems.forEach(problem => {
                    const problemId = `${category.category}-${problem.id}`;
                    const isSolved = localStorage.getItem(`${date}-${problemId}`) === 'true';
                    
                    totalProblems++;
                    if (isSolved) {
                        totalSolved++;
                        if (date === new Date().toISOString().split('T')[0]) {
                            solvedToday++;
                        }
                    }
                });
            });
            
            document.getElementById('solved-today-count').textContent = solvedToday;
            document.getElementById('total-solved-count').textContent = totalSolved;
            
            const progressPercentage = totalProblems > 0 ? Math.round((totalSolved / totalProblems) * 100) : 0;
            document.getElementById('progress-bar').style.width = `${progressPercentage}%`;
            document.getElementById('progress-text').textContent = `${progressPercentage}% Complete`;
        }