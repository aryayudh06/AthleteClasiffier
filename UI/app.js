Dropzone.autoDiscover = false;

function init() {
    let dz = new Dropzone("#dropzone", {
        url: "/",
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Some Message",
        autoProcessQueue: false
    });
    
    dz.on("addedfile", function() {
        if (dz.files[1] != null) {
            dz.removeFile(dz.files[0]);
        }
    });

    dz.on("complete", function(file) {
        let imageData = file.dataURL;

        var url = "http://127.0.0.1:5000/classify_image";

        $.post(url, {
            image_data: imageData
        }, function(data, status) {
            console.log(data);
            if (!data || data.length == 0) {
                $("#resultHolder").hide();
                $("#divClassTable").hide();
                $("#error").show();
                return;
            }

            let players = ["lionel_messi", "maria_sharapova", "roger_federer", "serena_williams", "virat_kohli"];
            $("#resultHolder").html(""); // Clear previous results
            $("#classTable tbody").html(""); // Clear previous scores

            // Loop through all detected faces
            data.forEach((match, index) => {
                // Display each face classification result
                let playerHtml = $(`[data-player="${match.class}"]`).html();
                $("#resultHolder").append(`
                    <div class="face-result">
                        <h5>Face ${index + 1}</h5>
                        ${playerHtml}
                    </div>
                `);

                // Display probabilities in the table
                let classDictionary = match.class_dictionary;
                for (let personName in classDictionary) {
                    let index = classDictionary[personName];
                    let probabilityScore = match.class_prob[index];
                    $("#classTable tbody").append(`
                        <tr>
                            <td>${personName.replace("_", " ")}</td>
                            <td>${probabilityScore.toFixed(2)}%</td>
                        </tr>
                    `);
                }
            });

            $("#error").hide();
            $("#resultHolder").show();
            $("#divClassTable").show();
        });
    });

    $("#submitBtn").on('click', function(e) {
        dz.processQueue();
    });
}

$(document).ready(function() {
    console.log("ready!");
    $("#error").hide();
    $("#resultHolder").hide();
    $("#divClassTable").hide();

    init();
});
