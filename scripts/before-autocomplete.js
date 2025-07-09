// scripts/autocomplete.js

const departments = ['Biology', 'Business', 'Chemistry', 'Computer Science', 'Engineering', 'English', 'Environmental Studies'];

function filterDepartments() {
  const input = document.getElementById('dept-autocomplete');
  const list = document.getElementById('dept-list');
  const value = input.value.toLowerCase();

  list.innerHTML = '';
  if (value.length === 0) {
    list.style.display = 'none';
    return;
  }

  const filtered = departments.filter(d => d.toLowerCase().includes(value));

  if (filtered.length > 0) {
    filtered.forEach(dept => {
      const li = document.createElement('li');
      li.textContent = dept;
      li.className = 'list-group-item';
      list.appendChild(li);
    });
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}
