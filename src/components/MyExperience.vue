<script>
import axios from "axios";

export default {
  mounted() {
    axios.get("experience.json").then((response) => console.log(response));
  },
};
</script>
