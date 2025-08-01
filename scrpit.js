document.addEventListener('DOMContentLoaded', () => {
  const order = { free:1, silver:2, gold:3, platinum:4 };

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selected = btn.dataset.tier;
      document.querySelectorAll('.card').forEach(card => {
        const ct = card.dataset.tier;
        card.style.display = (selected === 'all' || order[ct] >= order[selected]) ? '' : 'none';
      });
    });
  });
});
